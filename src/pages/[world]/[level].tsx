import React, {ReactElement} from 'react';
import {
  GetServerSidePropsContext,
  GetStaticPathsResult,
  GetStaticPropsResult,
} from 'next';
import {DefaultLayout} from '../../layouts/default/default.layout';
import {BoardModule} from '../../modules/board/board.module';
import {announcer} from '../../app/data/announcer/announcer';
import {
  AudioAnnouncerComponent,
} from '../../components/audio-announcer/audio-announcer.component';
import {MetaComponent} from '../../components/meta/meta.component';
import {validateWorldAndLevel} from '../../utils/validate-world-and-level';
import {capitalizeFirstLetter} from '../../utils/capitalize-first-letter';
import {
  useWorldLevelPage,
} from '../../pages-lib/[world]/[level]/hooks/use-world-level-page';
import {getWorldKeys} from '../../utils/get-world-keys';
import {getLevelKeys} from '../../utils/get-level-keys';

interface WorldLevelPageProps {
  world: string;
  level: string;
}

export default function WorldLevelPage({
  world,
  level,
}: WorldLevelPageProps): ReactElement {
  const {isAnnouncer, deck} = useWorldLevelPage(world, level);

  return (
    <>
      <MetaComponent
        title={`${capitalizeFirstLetter(world)} ${level} | Memaudio`}
      />
      <DefaultLayout customMeta>
        {isAnnouncer &&
          <AudioAnnouncerComponent files={[announcer.game.start]} />}
        {deck && <BoardModule cards={deck} />}
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps(context: GetServerSidePropsContext): Promise<GetStaticPropsResult<WorldLevelPageProps>> {
  const world = context.params.world as string;
  const level = context.params.level as string;

  const isValid = validateWorldAndLevel(world, level);

  if (!isValid) {
    return {redirect: {destination: '/404', permanent: false}};
  }

  return {
    props: {
      world,
      level,
    },
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const worlds = getWorldKeys();

  const paths = worlds.map((world) => {
    const levels = getLevelKeys(world);

    return levels.map((level) => ({
      params: {
        world,
        level,
      },
    }));
  });

  return {
    paths: paths.flat(),
    fallback: false,
  };
}

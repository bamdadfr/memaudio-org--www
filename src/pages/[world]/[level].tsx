import React, {ReactElement} from 'react';
import {GetServerSidePropsContext, GetServerSidePropsResult} from 'next';
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

type WorldLevelPageProps = {
  world: string;
  level: string;
};

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

interface ServerProps {
  world: string;
  level: string;
}

// noinspection JSUnusedGlobalSymbols
export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<ServerProps>> {
  const world = context.query.world as string;
  const level = context.query.level as string;

  const isValid = validateWorldAndLevel(world, level);

  if (!isValid) {
    return {redirect: {destination: '/404', permanent: false}};
  }

  const props: ServerProps = {
    world,
    level,
  };

  return {props};
}

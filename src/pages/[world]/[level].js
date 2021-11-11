import React from 'react';
import PropTypes from 'prop-types';
import { DefaultLayout } from '../../layouts/default/default.layout';
import { BoardModule } from '../../modules/board/board.module';
import { announcer } from '../../app/data/announcer/announcer';
import { AudioAnnouncerComponent } from '../../components/audio-announcer/audio-announcer.component';
import { MetaComponent } from '../../components/meta/meta.component';
import { validateWorldAndLevel } from '../../utils/validate-world-and-level';
import { capitalizeFirstLetter } from '../../utils/capitalize-first-letter';
import { useWorldLevelPage } from '../../pages-lib/[world]/[level]/hooks/use-world-level-page';

const propTypes = {
  world: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

/**
 * @param {object} props react props
 * @param {string} props.world valid world
 * @param {string} props.level valid level
 * @returns {React.ReactNode} react component
 */
export default function WorldLevelPage ({ world, level }) {
  const { isAnnouncer, deck } = useWorldLevelPage (world, level);

  return (
    <>
      <MetaComponent
        title={`${capitalizeFirstLetter (world)} ${level} | Memaudio`}
      />
      <DefaultLayout customMeta>
        {isAnnouncer &&
        <AudioAnnouncerComponent files={[announcer.game.start]} />}
        {deck && <BoardModule cards={deck} />}
      </DefaultLayout>
    </>
  );
}

// noinspection JSUnusedGlobalSymbols
/**
 * @param {object} context next.js context
 * @returns {object} props
 */
export async function getServerSideProps (context) {
  const { world, level } = context.query;
  const props = {};
  const isValid = validateWorldAndLevel (world, level);

  if (!isValid) {
    return { redirect: { destination: '/404', permanent: false }};
  }

  props.world = world;
  props.level = level;
  return { props };
}

WorldLevelPage.propTypes = propTypes;

import React, {ReactElement} from 'react';
import {FaPlay} from 'react-icons/fa';
import {useRouter} from 'next/router';
import {DefaultLayout} from '../layouts/default/default.layout';
import {BoardModule} from '../modules/board/board.module';
import {theme} from '../app/styles/theme';
import {
  AudioAmbienceComponent,
} from '../components/audio-ambience/audio-ambience.component';
import {
  AudioAnnouncerComponent,
} from '../components/audio-announcer/audio-announcer.component';
import {announcer} from '../app/data/announcer/announcer';
import {useCompletePage} from '../pages-lib/complete/hooks/use-complete-page';
import {capitalizeFirstLetter} from '../utils/capitalize-first-letter';
import {getNextLevelPath} from '../utils/get-next-level-path';

/**
 * Complete page
 * Path: /complete
 */
export default function CompletePage(): ReactElement {
  const router = useRouter();
  const {world, level} = useCompletePage();

  return (
    <>
      <DefaultLayout>
        <AudioAmbienceComponent />
        <AudioAnnouncerComponent
          files={[announcer.game.completeSuccess]}
        />
        <BoardModule
          cards={[
            {
              front: `${capitalizeFirstLetter(world)} ${level} complete`,
              color: theme.soap,
            },
            {
              front: <FaPlay />,
              color: theme.white,
              callback: async () => router.push(getNextLevelPath(world, level)),
              leaveOnCallback: true,
            },
          ]}
        />
      </DefaultLayout>
    </>
  );
}

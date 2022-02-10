import React, {ReactElement} from 'react';
import {FaHeadphones, FaPlay, FaQuestion, FaUser} from 'react-icons/fa';
import {useRouter} from 'next/router';
import {BoardModule} from '../modules/board/board.module';
import {DefaultLayout} from '../layouts/default/default.layout';
import {theme} from '../app/styles/theme';
import {
  AudioAmbienceComponent,
} from '../components/audio-ambience/audio-ambience.component';
import {
  AudioAnnouncerComponent,
} from '../components/audio-announcer/audio-announcer.component';
import {MetaComponent} from '../components/meta/meta.component';
import {announcer} from '../app/data/announcer/announcer';

/**
 * Home page
 * Path: /home
 */
export default function HomePage(): ReactElement {
  const router = useRouter();

  return (
    <>
      <MetaComponent
        title="Home | Memaudio"
      />
      <DefaultLayout customMeta>
        <AudioAmbienceComponent />
        <AudioAnnouncerComponent
          files={[
            announcer.home.welcome,
            announcer.home.clickYellowForPlaying,
          ]}
        />
        <BoardModule
          cards={[
            {
              front: <FaHeadphones />,
              color: theme.white,
              callback: async () => router.push('/'),
              leaveOnCallback: true,
            },
            {
              front: <FaUser />,
              back: 'le mode multijoueurs n\'est pas encore disponible',
              color: theme.red,
            },
            {
              front: <FaQuestion />,
              color: theme.blue,
            },
            {
              front: <FaPlay />,
              color: theme.yellow,
              callback: async () => router.push('/instruments/1'),
              leaveOnCallback: true,
            },
          ]}
        />
      </DefaultLayout>
    </>
  );
}

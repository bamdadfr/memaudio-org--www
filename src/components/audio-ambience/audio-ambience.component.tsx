import React, {ReactElement} from 'react';
import dynamic from 'next/dynamic';
import {Container} from './audio-ambience.component.styles';

const ReactPlayer = dynamic(() => import('react-player/lazy'), {ssr: false});

/**
 * Component for the audio ambience
 */
export function AudioAmbienceComponent(): ReactElement {
  return (
    <>
      <Container>
        <ReactPlayer
          url="https://soundcloud.com/abarrejadis/le-poinconneur-des-lilas"
          volume={0.5}
          playing
          loop
        />
      </Container>
    </>
  );
}

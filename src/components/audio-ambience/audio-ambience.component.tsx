import React, {ReactElement} from 'react';
import ReactPlayer from 'react-player';
import {Container} from './audio-ambience.component.styles';

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

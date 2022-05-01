import React from 'react';
import dynamic from 'next/dynamic';
import {Container} from './audio-announcer.component.styles';
import {
  useAudioAnnouncerComponent,
} from './hooks/use-audio-announcer-component';

const ReactPlayer = dynamic(() => import('react-player/lazy'), {ssr: false});

interface AudioAnnouncerComponentProps {
  /** Array of audio files to play */
  files: string[];
}

/**
 * Component for playing audio announcements
 */
export function AudioAnnouncerComponent({files}: AudioAnnouncerComponentProps): React.ReactElement {
  const {index, nextIndex} = useAudioAnnouncerComponent(files);

  return (
    <>
      {files &&
        <Container>
          <ReactPlayer
            url={files[index]}
            playing
            onEnded={nextIndex}
          />
        </Container>
      }
    </>
  );
}

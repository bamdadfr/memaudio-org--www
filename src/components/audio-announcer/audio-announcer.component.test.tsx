import React from 'react';
import {AudioAnnouncerComponent} from './audio-announcer.component';
import {testContainer} from '../../../__tests__/components/test-container';

const audioFiles = [
  'http://localhost/audio-01.mp3',
  'http://localhost/audio-02.mp3',
];

describe('AudioAnnouncerComponent', () => {
  testContainer(
    <AudioAnnouncerComponent
      files={audioFiles}
    />,
  );
});

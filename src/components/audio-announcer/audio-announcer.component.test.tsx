import React from 'react';
import {AudioAnnouncerComponent} from './audio-announcer.component';
import {announcer} from '../../app/data/announcer/announcer';
import {testContainer} from '../../../__tests__/components/test-container';

describe('AudioAnnouncerComponent', () => {
  testContainer(
    <AudioAnnouncerComponent
      files={[announcer.game.start]}
    />,
  );
});

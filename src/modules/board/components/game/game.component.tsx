import React, {ReactElement} from 'react';
import {useGameComponent} from './hooks/use-game-component';

/**
 * Component for the game.
 * No view component to avoid unnecessary re-rendering.
 */
export function GameComponent(): ReactElement {
  useGameComponent();

  return <></>;
}

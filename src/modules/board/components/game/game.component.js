import React from 'react';
import { useGameComponent } from './hooks/use-game-component';

/**
 * Component for the game.
 * No view component to avoid unnecessary re-rendering.
 *
 * @returns {React.ReactElement} - Rendered component.
 */
export function GameComponent () {
  useGameComponent ();

  return <></>;
}

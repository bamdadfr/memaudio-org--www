import { useGameMatch } from './use-game-match'
import { useGameComplete } from './use-game-complete'

/**
 * @description custom hook for game.component.js
 */
export function useGameComponent () {

    useGameMatch ()

    useGameComplete ()

}

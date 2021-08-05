import { useHeaderWorldManager } from './use-header-world-manager'
import { useHeaderSelect } from './use-header-select'

/**
 * @typedef {import('./use-header-world-manager').World} World
 * @typedef {import('./use-header-world-manager').WorldKeys} WorldKeys
 * @typedef {import('./use-header-world-manager').Level} Level
 * @typedef {import('./use-header-world-manager').LevelKeys} LevelKeys
 * @typedef {import('./use-header-world-manager').HandleChange} HandleChange
 * @typedef {import('./use-header-select').HandleSubmit} HandleSubmit
 * @typedef {import('./use-header-select').SubmitVisible} SubmitVisible
 * @returns {{World,WorldKeys,Level,LevelKeys,HandleChange,HandleSubmit,SubmitVisible}} header component state
 */
export function useHeaderComponent () {

    const {
        world,
        worldKeys,
        level,
        levelKeys,
        handleChange,
    } = useHeaderWorldManager ()

    const { handleSubmit, submitVisible } = useHeaderSelect (world, level)

    return {
        world,
        worldKeys,
        level,
        levelKeys,
        handleChange,
        handleSubmit,
        submitVisible,
    }

}
import { useHeaderWorldManager } from './use-header-world-manager'
import { useHeaderSelect } from './use-header-select'

/**
 * @typedef {import('./use-header-world-manager').UseHeaderWorldManager} UseHeaderComponent
 * @typedef {import('./use-header-select').UseHeaderSelect} UseHeaderSelect
 */

/**
 * @returns {UseHeaderComponent & UseHeaderSelect} UseHeaderComponent
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
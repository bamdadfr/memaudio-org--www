import { useHeaderWorldManager } from './use-header-world-manager'
import { useHeaderSelect } from './use-header-select'
import { UseHeaderComponentDto } from './use-header-component.dto'

// eslint-disable-next-line jsdoc/require-jsdoc
export function useHeaderComponent (): UseHeaderComponentDto {

    const {
        world,
        level,
        worldKeys,
        levelKeys,
        handleChange,
    } = useHeaderWorldManager ()

    const { handleSubmit, submitVisible } = useHeaderSelect (world, level)

    return {
        worldKeys,
        levelKeys,
        handleChange,
        handleSubmit,
        submitVisible,
    }

}
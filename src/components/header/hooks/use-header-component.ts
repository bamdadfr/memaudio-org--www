import { useHeaderState } from './use-header-state'
import { useHeaderSelect } from './use-header-select'
import { HeaderComponentDto } from '../header.component.dto'

export function useHeaderComponent (): HeaderComponentDto {

    const {
        world,
        level,
        worldKeys,
        levelKeys,
        handleChange,
    } = useHeaderState ()

    const { handleSubmit, submitVisible } = useHeaderSelect (world, level)

    return {
        world,
        level,
        worldKeys,
        levelKeys,
        handleChange,
        handleSubmit,
        submitVisible,
    }

}
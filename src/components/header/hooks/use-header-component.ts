import * as React from 'react'
import { useHeaderState } from './use-header-state'
import { useHeaderSelect } from './use-header-select'

export type UseHeaderComponent = {
    world: string
    level: string
    worldKeys: string[]
    levelKeys: string[]
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>, type: string) => void
    handleSubmit: () => void
    submitVisible: boolean
}

export function useHeaderComponent (): UseHeaderComponent {

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
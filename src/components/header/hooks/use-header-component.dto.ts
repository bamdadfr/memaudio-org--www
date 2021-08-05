import { WorldKeys, LevelKeys, HandleChange } from './use-header-world-manager'
import { HandleSubmit, SubmitVisible } from './use-header-select'

export type UseHeaderComponentDto = {
    worldKeys: WorldKeys
    levelKeys: LevelKeys
    handleChange: HandleChange
    handleSubmit: HandleSubmit
    submitVisible: SubmitVisible
}
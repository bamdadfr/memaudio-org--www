import { World, Level, WorldKeys, LevelKeys, HandleChange } from './use-header-world-manager'

export type UseHeaderWorldManagerDto = {
    world: World
    level: Level
    worldKeys: WorldKeys
    levelKeys: LevelKeys
    handleChange: HandleChange
}
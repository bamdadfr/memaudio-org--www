import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Worlds } from '../../../app/data'
import { World, Level, WorldKeys, LevelKeys, HandleChange } from '../header.component.dto'

type UseHeaderStateDto = {
    world: World
    level: Level
    worldKeys: WorldKeys
    levelKeys: LevelKeys
    handleChange: HandleChange
}

export function useHeaderState (): UseHeaderStateDto {

    const router = useRouter ()
    const [world, setWorld] = useState<World> ()
    const [level, setLevel] = useState<Level> ()
    const [worldKeys, setWorldKeys] = useState<WorldKeys> ()
    const [levelKeys, setLevelKeys] = useState<LevelKeys> ()

    // get current world and level
    useEffect (() => {

        const { world, level } = router.query

        if (Array.isArray (world)) return

        setWorld (world)

        if (Array.isArray (level)) return

        setLevel (level)

    }, [router.query])

    // get all worlds and levels
    useEffect (() => {

        if (typeof world === 'undefined') return

        setWorldKeys (Object.keys (Worlds))

        setLevelKeys (Object.keys (Worlds[world]))

    }, [world])

    // if level does not exist, set it to first
    useEffect (() => {

        if (typeof world === 'undefined') return

        if (typeof level === 'undefined') return

        if (typeof levelKeys === 'undefined') return

        if (typeof Worlds[world][level] !== 'undefined') return

        setLevel ('1')

    }, [world, level, levelKeys])

    const handleChange: HandleChange = useCallback ((e, type) => {

        if (type === 'world') setWorld (e.target.value)

        if (type === 'level') setLevel (e.target.value)

    }, [])

    return {
        world,
        worldKeys,
        level,
        levelKeys,
        handleChange,
    }

}
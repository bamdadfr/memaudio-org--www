import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { worlds } from '../../../app/data'
import { UseHeaderComponent } from './use-header-component'

type UseHeaderState = {
    world: UseHeaderComponent['world']
    worldKeys: UseHeaderComponent['worldKeys']
    level: UseHeaderComponent['level']
    levelKeys: UseHeaderComponent['levelKeys']
    handleChange: UseHeaderComponent['handleChange']
}

export function useHeaderState (): UseHeaderState {

    const router = useRouter ()
    const [world, setWorld] = useState<string> (!Array.isArray (router.query.world) && router.query.world)
    const [level, setLevel] = useState<string> (!Array.isArray (router.query.level) && router.query.level)
    const [worldKeys, setWorldKeys] = useState<string[]> ()
    const [levelKeys, setLevelKeys] = useState<string[]> ()

    // get current world and level
    useEffect (() => {

        const { world, level } = router.query

        if (!Array.isArray (world)) setWorld (world)

        if (!Array.isArray (level)) setLevel (level)

    }, [router.query])

    // get all worlds and levels
    useEffect (() => {

        setWorldKeys (Object.keys (worlds))

        if (world) setLevelKeys (Object.keys (worlds[world]))

    }, [world, level])

    // if level does not exist, set it to first
    useEffect (() => {

        if (!world) return

        if (typeof worlds[world][level] !== 'undefined') return

        setLevel (worlds[world][0])

    }, [world, level])

    const handleChange: UseHeaderState['handleChange'] = useCallback ((e, type) => {

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
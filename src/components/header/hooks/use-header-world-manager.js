import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Worlds } from '../../../app/data'

/**
 * @typedef {string} World
 * @typedef {string[]} WorldKeys
 * @typedef {string} Level
 * @typedef {string[]} LevelKeys
 * @typedef {Function<undefined>} HandleChange
 * @returns {{World,WorldKeys,Level,LevelKeys,HandleChange}} world and level state
 */
export function useHeaderWorldManager () {

    const router = useRouter ()
    const [world, setWorld] = useState ()
    const [worldKeys, setWorldKeys] = useState ()
    const [level, setLevel] = useState ()
    const [levelKeys, setLevelKeys] = useState ()

    // get current world and level
    useEffect (() => {

        const { world, level } = router.query

        setWorld (world)

        setLevel (level)

    }, [router.query])

    // get all worlds and levels
    useEffect (() => {

        if (typeof world === 'undefined') return

        if (typeof level === 'undefined') return

        setWorldKeys (Object.keys (Worlds))

        setLevelKeys (Object.keys (Worlds[world]))

    }, [world, level])

    // if level does not exist, set it to first
    useEffect (() => {

        if (typeof level === 'undefined') return

        if (typeof levelKeys === 'undefined') return

        if (typeof Worlds[world][level] !== 'undefined') return

        setLevel (1)

    }, [world, level, levelKeys])

    const handleChange = useCallback ((e, type) => {

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
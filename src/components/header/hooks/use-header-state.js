import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Worlds } from '../../../app/data'

/**
 * @typedef {object} UseHeaderState
 * @property {string} world current world (from router)
 * @property {string[]} worldKeys all world keys
 * @property {string} level current level (from router)
 * @property {string[]} levelKeys all level keys
 * @property {function(): undefined} handleChange world and level change handler
 */

/**
 * @returns {UseHeaderState} UseHeaderState
 */
export function useHeaderState () {

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

        setLevel (Worlds[world][0])

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
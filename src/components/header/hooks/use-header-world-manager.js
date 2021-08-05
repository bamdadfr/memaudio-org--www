import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Worlds } from '../../../app/data'

/**
 * @typedef {object} UseHeaderWorldManager
 * @property {World} world current world (from router)
 * @property {WorldKeys} worldKeys all world keys
 * @property {Level} level current level (from router)
 * @property {LevelKeys} levelKeys all level keys
 * @property {HandleChange} handleChange world and level change handler
 */

/**
 * @returns {UseHeaderWorldManager} UseHeaderWorldManager
 */
export function useHeaderWorldManager () {

    const router = useRouter ()
    /**
     * @typedef {string} World
     */
    const [world, setWorld] = useState ()
    /**
     * @typedef {string[]} WorldKeys
     */
    const [worldKeys, setWorldKeys] = useState ()
    /**
     * @typedef {string} Level
     */
    const [level, setLevel] = useState ()
    /**
     * @typedef {string[]} LevelKeys
     */
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

    /**
     * @typedef {function(React.ChangeEvent<HTMLSelectElement>, string): undefined} HandleChange
     */
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
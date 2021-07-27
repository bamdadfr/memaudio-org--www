import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../store'

/**
 * @description pages/complete.js
 * @returns {{String, String}} app state
 */
export function useCompletePage () {

    const router = useRouter ()
    const isComplete = useStore ((state) => state.game.isComplete)
    const world = useStore ((state) => state.game.world)
    const level = useStore ((state) => state.game.level)

    useEffect (async () => {

        if (isComplete) return

        await router.replace ('/')

    }, [])

    if (!isComplete) return <></>

    return { world, level }

}

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../store'

/**
 * @description next.js 404
 */
export function use404Page () {

    const router = useRouter ()
    const setLeave = useStore ((state) => state.board.setLeave)
    const waitFor = useStore ((state) => state.animations.waitFor)

    useEffect (() => {

        setTimeout (() => {

            setLeave ()

            setTimeout (async () => {

                await router.push ('/')

            }, waitFor.board.leave)

        }, 2000)

    }, [])

}

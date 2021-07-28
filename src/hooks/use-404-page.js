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

        const t1 = setTimeout (() => {

            setLeave ()

        }, 2000)

        const t2 = setTimeout (async () => {

            await router.push ('/')

        }, 2000 + waitFor.board.leave)

        return () => {

            clearTimeout (t1)

            clearTimeout (t2)

        }

    }, [router, setLeave, waitFor.board.leave])

}

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../../../store'

/**
 * @param {string} world selected world
 * @param {string} level selected level
 * @typedef {Function<undefined>} HandleSubmit
 * @typedef {boolean} SubmitVisible
 * @returns {{HandleSubmit, SubmitVisible}} HTML select state
 */
export function useHeaderSelect (world, level) {

    const router = useRouter ()
    const isLeaving = useStore ((state) => state.board.isLeaving)
    const setLeave = useStore ((state) => state.board.setLeave)
    const [submitVisible, setSubmitVisible] = useState (false)
    const [submitFired, setSubmitFired] = useState (false)

    // post submit
    useEffect (() => {

        if (submitFired && !isLeaving) {

            (async () => {

                setSubmitFired (false)

                await router.push (`/${world}/${level}`)

            }) ()

        }

    }, [isLeaving, level, router, submitFired, world])

    // handle submit visibility
    useEffect (() => {

        if (typeof world === 'undefined') return

        if (typeof level === 'undefined') return

        if (world !== router.query.world) return setSubmitVisible (true)

        if (level !== router.query.level) return setSubmitVisible (true)

        setSubmitVisible (false)

    }, [world, level, router.query])

    const handleSubmit = useCallback (() => {

        if (!submitVisible) return

        setSubmitVisible (false)

        setLeave ()

        setSubmitFired (true)

    }, [setLeave, submitVisible])

    return {
        handleSubmit,
        submitVisible,
    }

}
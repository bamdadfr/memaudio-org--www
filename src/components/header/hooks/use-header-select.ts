import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../../../store'
import { Level, World, HandleSubmit, SubmitVisible } from '../header.component.dto'

type UseHeaderSelect = {
    handleSubmit: HandleSubmit
    submitVisible: SubmitVisible
}

export function useHeaderSelect (world: World, level: Level): UseHeaderSelect {

    const router = useRouter ()
    const isLeaving = useStore ((state: any) => state.board.isLeaving)
    const setLeave = useStore ((state: any) => state.board.setLeave)
    /**
     * @typedef {boolean} SubmitVisible
     */
    const [submitVisible, setSubmitVisible] = useState<SubmitVisible> (false)
    const [submitFired, setSubmitFired] = useState<boolean> (false)

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

        if (world !== router.query.world) return setSubmitVisible (true)

        if (level !== router.query.level) return setSubmitVisible (true)

        setSubmitVisible (false)

    }, [world, level, router.query])

    const handleSubmit: HandleSubmit = useCallback (() => {

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
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../../../store'
import { UseHeaderSelectDto } from './use-header-select.dto'
import { Level, World } from './use-header-world-manager'

export type SubmitVisible = boolean

export type SubmitFired = boolean

export type HandleSubmit = () => void

// eslint-disable-next-line jsdoc/require-jsdoc
export function useHeaderSelect (world: World, level: Level): UseHeaderSelectDto {

    const router = useRouter ()
    const isLeaving = useStore ((state: any) => state.board.isLeaving)
    const setLeave = useStore ((state: any) => state.board.setLeave)
    /**
     * @typedef {boolean} SubmitVisible
     */
    const [submitVisible, setSubmitVisible] = useState<SubmitVisible> (false)
    const [submitFired, setSubmitFired] = useState<SubmitFired> (false)

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
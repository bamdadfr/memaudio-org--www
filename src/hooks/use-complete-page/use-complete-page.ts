import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../../store'

type UseCompletePage = {
    world: string
    level: string
}

export function useCompletePage (): UseCompletePage {

    const router = useRouter ()
    const isComplete = useStore ((state: any) => state.game.isComplete)
    const isCompleteRef = useRef (isComplete) // use this to keep initial value (replace useEffect [])
    const world = useStore ((state: any) => state.game.world)
    const level = useStore ((state: any) => state.game.level)

    useEffect (() => {

        (async () => {

            if (isCompleteRef.current) return

            await router.replace ('/')

        }) ()

    }, [router])

    return { world, level }

}
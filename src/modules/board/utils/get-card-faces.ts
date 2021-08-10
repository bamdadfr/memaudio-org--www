import { ReactNode } from 'react'

export type GetCardFaces = {
    front: ReactNode|string|null
    back: ReactNode|string|null
}

export function getCardFaces (props: ReactNode): GetCardFaces {

    if (typeof props === 'string') return { 'front': props, 'back': null }

    const front = typeof props[0] === 'undefined' ? props : props[0]
    const back = typeof props[1] === 'undefined' ? null : props[1]

    return {
        front,
        back,
    }

}
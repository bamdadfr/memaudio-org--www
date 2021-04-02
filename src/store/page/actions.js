import {
    SET_PAGE_REDIRECT,
    SET_PAGE_TRANSITION,
} from './types'

export const setPageRedirect = (status) => ({
    'type': SET_PAGE_REDIRECT,
    'payload': status,
})

export const setPageTransition = (status) => ({
    'type': SET_PAGE_TRANSITION,
    'payload': status,
})

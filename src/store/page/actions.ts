import {
    PageState,
    PageActionTypes,
    SET_PAGE_REDIRECT,
    SET_PAGE_TRANSITION,
} from './types'

export const setPageRedirect = (status: PageState['redirect']): PageActionTypes => ({
    'type': SET_PAGE_REDIRECT,
    'payload': status,
})

export const setPageTransition = (status: PageState['transition']): PageActionTypes => ({
    'type': SET_PAGE_TRANSITION,
    'payload': status,
})

import {
    // PageState,
    PageActionTypes,
    SET_PAGE_REDIRECT,
    SET_PAGE_TRANSITION,
} from './types'

// TODO: adapt to TS4
// export const setPageRedirect = (status: PageState['redirect']): PageActionTypes => ({
export const setPageRedirect = (status: any): PageActionTypes => ({
    'type': SET_PAGE_REDIRECT,
    'payload': status,
})

// export const setPageTransition = (status: PageState['transition']): PageActionTypes => ({
export const setPageTransition = (status: any): PageActionTypes => ({
    'type': SET_PAGE_TRANSITION,
    'payload': status,
})

export interface PageState {
    redirect: boolean
    transition: boolean
}

export const SET_PAGE_REDIRECT = 'SET_PAGE_REDIRECT'

interface SetPageRedirect {
    type: typeof SET_PAGE_REDIRECT
    payload: PageState['redirect']
}

export const SET_PAGE_TRANSITION = 'SET_PAGE_TRANSITION'

interface SetPageTransition {
    type: typeof SET_PAGE_TRANSITION
    payload: PageState['transition']
}

export type PageActionTypes = SetPageRedirect | SetPageTransition

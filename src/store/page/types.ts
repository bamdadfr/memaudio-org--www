export interface PageState {
    redirect: string | null;
    transition: boolean;
}

export const SET_PAGE_REDIRECT = 'SET_PAGE_REDIRECT'

interface SetPageRedirect {
    type: typeof SET_PAGE_REDIRECT;
    // TODO: adapt to TS4
    // payload: PageState['redirect'];
    payload: any;
}

export const SET_PAGE_TRANSITION = 'SET_PAGE_TRANSITION'

interface SetPageTransition {
    type: typeof SET_PAGE_TRANSITION;
    // TODO: adapt to TS4
    // payload: PageState['transition'];
    payload: any;
}

export type PageActionTypes = SetPageRedirect | SetPageTransition

import {
    AudioState,
    AudioActionTypes,
    SET_AUDIO_SRC,
    SET_AUDIO_PLAYLIST,
    SET_AUDIO_BACKGROUND,
} from './types'

const initState: AudioState = {
    'src': null,
    'playlist': [],
    'background': false,
}

export default (
    state = initState,
    action: AudioActionTypes,
): AudioState => {

    switch (action.type) {

        case SET_AUDIO_SRC:
            return {
                ...state,
                'src': action.payload,
            }

        case SET_AUDIO_PLAYLIST:
            return {
                ...state,
                'playlist': action.payload,
            }

        case SET_AUDIO_BACKGROUND:
            return {
                ...state,
                'background': action.payload,
            }

        default:
            return state
    
    }

}
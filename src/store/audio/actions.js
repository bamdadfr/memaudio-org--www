import {
    SET_AUDIO_SRC,
    SET_AUDIO_PLAYLIST,
    SET_AUDIO_BACKGROUND,
} from './types'

export const setAudioSrc = (status) => ({
    'type': SET_AUDIO_SRC,
    'payload': status,
})

export const setAudioPlaylist = (status) => ({
    'type': SET_AUDIO_PLAYLIST,
    'payload': status,
})

export const setAudioBackground = (status) => ({
    'type': SET_AUDIO_BACKGROUND,
    'payload': status,
})
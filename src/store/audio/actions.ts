import {
    AudioState,
    AudioActionTypes,
    SET_AUDIO_SRC,
    SET_AUDIO_PLAYLIST,
    SET_AUDIO_BACKGROUND,
} from './types'

export const setAudioSrc = (status: AudioState['src'],): AudioActionTypes => ({
    'type': SET_AUDIO_SRC,
    'payload': status,
})

export const setAudioPlaylist = (status: AudioState['playlist'],): AudioActionTypes => ({
    'type': SET_AUDIO_PLAYLIST,
    'payload': status,
})

export const setAudioBackground = (status: AudioState['background'],): AudioActionTypes => ({
    'type': SET_AUDIO_BACKGROUND,
    'payload': status,
})
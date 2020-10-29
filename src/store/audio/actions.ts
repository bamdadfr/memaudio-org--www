import {
    // AudioState,
    AudioActionTypes,
    SET_AUDIO_SRC,
    SET_AUDIO_PLAYLIST,
    SET_AUDIO_BACKGROUND,
} from './types'

// TODO: adapt to TS4
// export const setAudioSrc = (status: AudioState['src']): AudioActionTypes => ({
export const setAudioSrc = (status: any): AudioActionTypes => ({
    'type': SET_AUDIO_SRC,
    'payload': status,
})

// TODO: adaapt to TS4
// export const setAudioPlaylist = (status: AudioState['playlist']): AudioActionTypes => ({
export const setAudioPlaylist = (status: any): AudioActionTypes => ({
    'type': SET_AUDIO_PLAYLIST,
    'payload': status,
})

// TODO: adapt to TS4
// export const setAudioBackground = (status: AudioState['background']): AudioActionTypes => ({
export const setAudioBackground = (status: any): AudioActionTypes => ({
    'type': SET_AUDIO_BACKGROUND,
    'payload': status,
})
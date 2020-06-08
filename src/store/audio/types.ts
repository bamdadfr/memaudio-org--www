export interface AudioState {
    src: string | null
    playlist: []
    background: boolean
}

export type AudioActionTypes =
SetAudioSrc
| SetAudioPlaylist
| SetAudioBackground

export const SET_AUDIO_SRC = 'SET_AUDIO_SRC'

interface SetAudioSrc {
    type: typeof SET_AUDIO_SRC
    payload: AudioState['src']
}

export const SET_AUDIO_PLAYLIST = 'SET_AUDIO_PLAYLIST'

interface SetAudioPlaylist {
    type: typeof SET_AUDIO_PLAYLIST
    payload: AudioState['playlist']
}

export const SET_AUDIO_BACKGROUND = 'SET_AUDIO_BACKGROUND'

interface SetAudioBackground {
    type: typeof SET_AUDIO_BACKGROUND
    payload: AudioState['background']
}


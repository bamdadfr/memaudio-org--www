export interface AudioState {
    src: string | null;
    playlist: [];
    background: boolean;
}

export const SET_AUDIO_SRC = 'SET_AUDIO_SRC'

interface SetAudioSrc {
    type: typeof SET_AUDIO_SRC;
    // TODO: adapt to TS4
    // payload: AudioState['src'];
    payload: any;
}

export const SET_AUDIO_PLAYLIST = 'SET_AUDIO_PLAYLIST'

interface SetAudioPlaylist {
    type: typeof SET_AUDIO_PLAYLIST;
    // TODO: adapt to ts4
    // payload: AudioState['playlist'];
    payload: any;
}

export const SET_AUDIO_BACKGROUND = 'SET_AUDIO_BACKGROUND'

interface SetAudioBackground {
    type: typeof SET_AUDIO_BACKGROUND;
    // TODO: adapt to ts4
    // payload: AudioState['background'];
    payload: any;
}

export type AudioActionTypes =
SetAudioSrc
| SetAudioPlaylist
| SetAudioBackground

import { combineReducers, createStore } from 'redux'
import pageReducer from './page/reducers'
import audioReducer from './audio/reducers'
import albumsReducer from './albums/reducers'
import gameReducer from './game/reducers'

const rootReducer = combineReducers ({
    'page': pageReducer,
    'audio': audioReducer,
    'albums': albumsReducer,
    'game': gameReducer,
})

export default rootReducer

export const store = createStore (rootReducer)
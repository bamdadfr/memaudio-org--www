import { combineReducers } from 'redux'
import pageReducer from './page/reducers'
import audioReducer from './audio/reducers'

const rootReducer = combineReducers ({
    'page': pageReducer,
    'audio': audioReducer,
})

export type RootState = ReturnType<typeof rootReducer>
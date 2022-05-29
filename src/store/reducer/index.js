import {combineReducers} from 'redux'
import GamesReducer from './gamesReducer'

export const reducers = combineReducers({
    games: GamesReducer
})
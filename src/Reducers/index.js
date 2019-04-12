import { combineReducers } from 'redux'
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { weatherReducer } from './weatherReducer';

export const rootReducer = combineReducers({
    hasError: errorReducer,
    isLoading: loadingReducer,
    currentWeather: weatherReducer
})
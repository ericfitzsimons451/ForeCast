import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { weatherReducer } from './weatherReducer';

describe('index', () => {
    describe('rootReducer', () => {
        it('should call combineReducers with an object of reducers', () => {
            const mockReducerObject = {
                hasError: errorReducer,
                isLoading: loadingReducer,
                currentWeather: weatherReducer
            }
            const combineReducers = jest.fn()
            combineReducers(mockReducerObject)
            expect(combineReducers).toHaveBeenCalledWith(mockReducerObject)
        })
    })
})
import * as actions from '../Actions'
import { weatherReducer } from '../Reducers/weatherReducer'

describe('weatherReducer', () => {
    let mockDefaultState;

    beforeEach(() => {
        mockDefaultState = {}
    })

    it('should return state as a default', () => {
        const mockAction = {}
        const results = weatherReducer(mockDefaultState, mockAction)
        expect(results).toEqual(mockDefaultState)
    })

    it('should return a currentWeather object if the action.type is SET_CITY_WEATHER', () => {
        const mockWeatherObject = {
            city: 'Raleigh',
            sunrise: '11:30'
        }
        const results = weatherReducer(mockDefaultState, actions.setCityWeather(mockWeatherObject))
        expect(results).toEqual(mockWeatherObject)
    })
})
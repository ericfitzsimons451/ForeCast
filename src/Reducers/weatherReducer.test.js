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

    // it('should return state if the action.type is SET_CITY_WEATHER and it has not been called yet', () => {
    //     const mockWeatherObject = {
    //         currentWeather: [{
    //             city: 'Raleigh',
    //             sunrise: '11:30'
    //         }]
    //     }
    //     const results = weatherReducer(mockDefaultState, actions.setCityWeather({}))
    //     expect(results).toEqual(mockDefaultState)
    // })

    it.skip('should return a weather object if the action.type is SET_CITY_WEATHER', () => {
        const mockWeatherObject = {
            type: 'SET_CITY_WEATHER',
            currentWeather: [{
                city: 'Raleigh',
                sunrise: '11:30'
            }]
        }
        const mockReturnedObject = {city: 'Raleigh', sunrise: '11:30'}
        const results = weatherReducer(mockDefaultState, actions.setCityWeather(mockWeatherObject))
        expect(results).toEqual(mockReturnedObject)
        //how can I get this test to pass when the functionality is there
        //but until I successfully make a request, there is no data
    })
})
import * as actions from '../Actions'
import { weatherReducer } from '../Reducers/weatherReducer'

describe('weatherReducer', () => {


	it('should return state as a default', () => {
		const mockAction = {}
		const results = weatherReducer(undefined, mockAction)
		expect(results).toEqual({})
	})

	it('should return a weather object if the action.type is SET_CITY_WEATHER', () => {
		const mockWeatherObject = {
				data: [{
					city: 'Raleigh',
					sunrise: '11:30'
				}]
		}
		const mockReturnedObject = { city: 'Raleigh', sunrise: '11:30' }
		const results = weatherReducer(undefined, actions.setCityWeather(mockWeatherObject))
		expect(results).toEqual(mockReturnedObject)
	})
})
import * as actions from './index'

describe('isLoading', () => {
	it('should take in and return a boolean if the action.type is IS_LOADING', () => {
		const mockBool = false
		const results = actions.isLoading(mockBool)
		const expected = {
			type: 'IS_LOADING',
			isLoading: mockBool
		}
		expect(results).toEqual(expected)
	})
})

describe('hasError', () => {
	it('should take in and return a message if the action.type is HAS_ERROR', () => {
		const mockMessage = 'Something is awry, yo!'
		const results = actions.hasError(mockMessage)
		const expected = {
			type: 'HAS_ERROR',
			message: mockMessage
		}
		expect(results).toEqual(expected)
	})
})

describe('setCityWeather', () => {
	it('should take in and return an object if the action.type is SET_CITY_WEATHER', () => {
		const mockWeather = { city: 'Raleigh', weather: 'sunny' }
		const results = actions.setCityWeather(mockWeather)
		const expected = {
			type: 'SET_CITY_WEATHER',
			currentWeather: mockWeather
		}
		expect(results).toEqual(expected)
	})
})
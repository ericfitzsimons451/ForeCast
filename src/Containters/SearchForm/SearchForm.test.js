import React from 'react'
import { SearchForm } from './SearchForm'
import { shallow } from 'enzyme'
import { getCityWeather } from '../../Thunks/getCityWeather'
import { mapDispatchToProps } from './SearchForm'
jest.mock('../../Thunks/getCityWeather')

describe.only('searchForm', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<SearchForm getCityWeather={jest.fn()} />)
	})

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	describe('handleChange', () => {
		it('should update state with the name and value of the e.target', () => {
			const mockEvent = {
				target: {
					searchInfo: '',
				}
			}
			const initialState = {
				searchInfo: '',
			}
			const updatedState = {
				searchInfo: '',
			}
			expect(wrapper.state()).toEqual(initialState)
			wrapper.instance().handleChange(mockEvent)
			expect(wrapper.state()).toEqual(updatedState)
		})
	})

	describe('handleGetCityWeather', () => {
		it('calls a props function and resets state', () => {
			const mockCityName = ''
			const mockWeatherApiKey = '9c78e475d35b4ff0893f6000c382f37f'
			const mockUrl = `https://api.weatherbit.io/v2.0/current?city=${mockCityName}&key=${mockWeatherApiKey}`
			wrapper.instance().handleGetCityWeather()
			expect(wrapper.instance().props.getCityWeather).toHaveBeenCalledWith(mockUrl)
			expect(wrapper.state()).toEqual({ searchInfo: '' })
		})
	})

	describe('mapDispatchToProps', () => {
		it('should dispatch getCityWeather if props.getCityWeather is triggered', () => {
			const mockDispatch = jest.fn()
			const mockUrl = 'www.url.com'
			const mockActionToDispatch = getCityWeather(mockUrl)
			const mappedProps = mapDispatchToProps(mockDispatch)
			mappedProps.getCityWeather(mockUrl)
			expect(mockDispatch).toHaveBeenCalledWith(mockActionToDispatch)
		})
	})
})
import React from 'react'
import { shallow } from 'enzyme'
import { App, mapStateToProps, mapDispatchToProps } from './App'
import { getCityWeather } from '../../Thunks/getCityWeather'
jest.mock('../../Thunks/getCityWeather')

describe.skip('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('getCityWeather', () => {
    it('should take in a city name and call props.getCityWeather with the url/cityName', () => {
      const mockCityName = 'Denver'
      const mockGetCityWeather = jest.fn()
      const wrapper = shallow(<App getCityWeather={mockGetCityWeather}/>)
      const weatherApiKey = 230232
      const mockUrl = `https://api.weatherbit.io/v2.0/current?city=${mockCityName}&key=${weatherApiKey}`
      expect(mockGetCityWeather).toHaveBeenCalledWith(mockUrl)
    })
  })
  
  describe('mapStateToProps', () => {
    it('should mapStateToProps', () => {
      const mockState = {}
      const updatedState = {
        isLoading: false,
        hasError: false,
        currentWeather: {
          city: 'Denver',
          sunrise: '11:30'
        }
      }
      const firstState = mapStateToProps(mockState)
      expect(firstState).toEqual({})
      const newState = mapStateToProps(updatedState)
      expect(newState).toEqual(updatedState)
    })
  })
})

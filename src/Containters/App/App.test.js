import React from 'react'
import { shallow } from 'enzyme'
import { App, mapStateToProps, mapDispatchToProps } from './App'
import { getCityWeather } from '../../Thunks/getCityWeather'
jest.mock('../../Thunks/getCityWeather')

describe('App', () => {
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
      const weatherApiKey = 230232
      const mockUrl = `https://api.weatherbit.io/v2.0/current?city=${mockCityName}&key=${weatherApiKey}`
      wrapper.instance().getCityWeather(mockCityName)
      // expect(wrapper.instance().props.getCityWeather).toHaveBeenCalledWith(mockUrl)
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

  it('should dispatch getCityWeather via the props object', () => {
    const mockDispatch = jest.fn()
    const mockUrl = 'www.url.com'
    const actionToDispatch = getCityWeather(mockUrl)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.getCityWeather(mockUrl)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})

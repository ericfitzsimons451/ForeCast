import React from 'react'
import { App, mapStateToProps, mapDispatchToProps } from './App'
import { getCityWeather } from '../../Thunks/getCityWeather'
jest.mock('../../Thunks/getCityWeather')

describe('App', () => {
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

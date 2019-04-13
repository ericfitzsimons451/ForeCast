import React from 'react'
import { App, mapStateToProps } from './App'

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
})

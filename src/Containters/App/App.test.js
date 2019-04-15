import React from 'react'
import { shallow } from 'enzyme'
import { App, mapStateToProps } from './App'
jest.mock('../../Thunks/getCityWeather')

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App
        isLoading={false}
        hasError={''}
        currentWeather={{}}
        getCityWeather={jest.fn}
      />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
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

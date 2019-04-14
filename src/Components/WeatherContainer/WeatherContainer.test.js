import React from 'react'
import { WeatherContainer, mapStateToProps } from './WeatherContainer'
import { shallow } from 'enzyme'

describe('WeatherContainer', () => {
    it('should match the snapshot', () => {
        const mockWeather = {
            city: 'Denver'
        }
        const wrapper = shallow(<WeatherContainer currentWeather={mockWeather}/>)
        expect(wrapper).toMatchSnapshot()
    })

    describe('mapStateToProps', () => {
        const mockWeather = {
            city: 'Denver'
        }
        const initialState = {}
        const mockState = {
            currentWeather: mockWeather
        }
        expect(initialState).toEqual({})
        const mappedProps = mapStateToProps(mockState)
        expect(mappedProps).toEqual(mockState)
    })
})
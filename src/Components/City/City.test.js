import React from 'react'
import { City } from './City'
import { shallow } from 'enzyme'

describe('City', () => {
    it('should match the snapshot if there is no data', () => {
        const weather = {}
        let wrapper = shallow(<City currentWeather={weather} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot if data is passed down', () => {
        const weather = {
            weather: 'Cloudy'
        }
        let wrapper = shallow(<City currentWeather={weather} />)
        expect(wrapper).toMatchSnapshot()
    })
})
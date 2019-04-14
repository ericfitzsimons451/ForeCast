import React from 'react'
import { City } from './City'
import { shallow } from 'enzyme'


describe('City', () => {
    it('should match the snapshot if there is no data', () => {
        const weather = {}
        let wrapper = shallow(<City weather={weather} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot if data is passed down', () => {
        const weather = {
            city: 'Denver'
        }
        let wrapper = shallow(<City weather={weather} />)
        expect(wrapper).toMatchSnapshot()
    })
})
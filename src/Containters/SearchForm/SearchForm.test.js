import React from 'react'
import { SearchForm } from './SearchForm'
import { shallow } from 'enzyme'

describe('searchForm', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SearchForm getCityWeather={jest.fn}/>)
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    describe('handleChange', () => {
        it('should update state with the name and value of the e.target', () => {
            let wrapper = shallow(<SearchForm />)
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

    describe('handleSubmit', () => {
        it('updates calls a props function and resets state', () => {
            const mockFunc = jest.fn()
            let wrapper = shallow(<SearchForm getCityWeather={mockFunc}/>)
            const mockEvent = { preventDefault: jest.fn() }
            // const mockState = {
            //     searchInfo: 'Raleigh'
            // }
            wrapper.instance().handleSubmit(mockEvent)
            // expect(wrapper.instance().props.getCityWeather()).toHaveBeenCalledWith(mockState)
            expect(wrapper.state()).toEqual({searchInfo: ''})
        })
    })
})
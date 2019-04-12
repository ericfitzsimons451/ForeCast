import { getCityWeather } from './getCityWeather'
import * as actions from '../Actions'

describe('getCityWeather', () => {

    let mockUrl
    let mockCityData;
    let mockDispatch;

    beforeEach(() => {
        mockUrl = 'www.url.com'
        mockCityData = {
            city: 'Raleigh',
            sunrise: '11:30'
        }
        mockDispatch = jest.fn()
    })

    it('should dispatch isLoading(true)', () => {
        const thunk = getCityWeather(mockUrl)
        thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(actions.isLoading(true))
    })

    it('should dispatch hasError with a message if there is a problem', async () => {
        window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
            ok: false,
            statusText: 'Something went wrong'
        }))
        const thunk = getCityWeather(mockUrl)
        await thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(actions.hasError('Something went wrong'))
    })

    it('should dispatch isLoading(false) if the response is ok', async () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ mockCityData })
        }))
        const thunk = getCityWeather(mockUrl)
        await thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(actions.isLoading(false))
    })

    it('should dispatch setCityWeather if the response is OK', async () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockCityData)
        }))
        const thunk = getCityWeather(mockUrl)
        await thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(actions.setCityWeather(mockCityData))
    })

})
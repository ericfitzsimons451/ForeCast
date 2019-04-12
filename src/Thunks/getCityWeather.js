import { allPurposeFetch } from '../Helpers/AllPurposeFetch'
import { isLoading, hasError, setCityWeather} from '../Actions/index'

export const getCityWeather = (url) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true))
            const response = await allPurposeFetch(url)
            if (!response.data) {
                throw new Error(response.statusText)
            }
            dispatch(isLoading(false))
            dispatch(setCityWeather(response.data))
        } catch (error) {
            dispatch(hasError(error.message))
        }
    }
}
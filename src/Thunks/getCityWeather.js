import { isLoading, hasError, setCityWeather } from '../Actions'

export const getCityWeather = (url) => {
	return async (dispatch) => {
		try {
			dispatch(isLoading(true))
			const response = await fetch(url)
			if (!response.ok) {
				throw Error(response.statusText)
			}
			const data = await response.json()
			dispatch(isLoading(false))
			dispatch(setCityWeather(data))
		} catch (error) {
			dispatch(hasError(error.message))
		}
	}
}


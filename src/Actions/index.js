export const isLoading = (bool) => ({
    type: 'IS_LOADING',
    isLoading: bool
})

export const hasError = (message) => ({
    type: 'HAS_ERROR',
    message
})

export const setCityWeather = (currentWeather) => ({
    type: 'SET_CITY_WEATHER',
    currentWeather
})
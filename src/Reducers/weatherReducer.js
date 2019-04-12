export const weatherReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_CITY_WEATHER':
            return action.currentWeather
        default:
            return state
    }   
}
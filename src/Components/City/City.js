import React from 'react'
import './City.scss'

export const City = ({weather}) => {
    if (weather.weather) {
        return (
            <div>
                <h2>{weather.city_name}</h2>
                <h3>Temperature: {((weather.temp * 9) / 5) + 32} F</h3>
                <h3>Relative Humidity: {weather.app_temp} %</h3>
                <h3>Description: {weather.weather.description}</h3>
                <h3>Cloud Coverage: {weather.clouds}%</h3>
                <h3>Sunrise: {weather.sunrise}</h3>
                <h3>Sunset: {weather.sunset}</h3>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default City

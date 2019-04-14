import React from 'react'
import './City.scss'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

export const City = ({weather}) => {
    if (weather.weather) {
        return (
            <div className='card'>
                <h2>{weather.city_name}</h2>
                <h3>Temperature: {((weather.temp * 9) / 5) + 32} F</h3>
                <h3>Relative Humidity: {weather.app_temp} %</h3>
                <h3>Description: {weather.weather.description}</h3>
                <h3>Cloud Coverage: {weather.clouds}%</h3>
                <h3>Sunrise: {weather.sunrise}</h3>
                <h3>Sunset: {weather.sunset}</h3>
                <Link to='/search'>Return</Link>
            </div>
        )
    } else {
        return (
            <div>Loading, please wait...</div>
        )
    }
}
City.propTypes = {
    weather: PropTypes.object
}

export default City

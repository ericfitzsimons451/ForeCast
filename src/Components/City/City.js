import React from 'react'
import '../../SCSS/Main.scss'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

export const City = ({ currentWeather }) => {
	if (currentWeather.weather) {
		return (
			<div className='card'>
				<h2 className='name'>{currentWeather.city_name}</h2>
				<h3>Temperature: {((currentWeather.temp * 9) / 5) + 32} F</h3>
				<h3 className='humidity'>Relative Humidity: {currentWeather.app_temp} %</h3>
				<h3>Description: {currentWeather.weather.description}</h3>
				<h3>Cloud Coverage: {currentWeather.clouds} %</h3>
				<h3>Sunrise: {currentWeather.sunrise}</h3>
				<h3>Sunset: {currentWeather.sunset}</h3>
				<Link to='/search' className='link-return'>Search Again</Link>
			</div>
		)
	} else {
		return (
			<div className='card'>
				<h3 className='name'>Loading</h3> 
				<h3 classNam='name'>Please wait</h3>
			</div>
		)
	}
}

City.propTypes = {
	currentWeather: PropTypes.object
}

export default City

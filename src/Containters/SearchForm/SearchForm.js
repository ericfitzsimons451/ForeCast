import React, { Component } from 'react'
import './SearchForm.scss'
import { PropTypes } from 'prop-types'
import { weatherApiKey } from '../../Helpers/weatherApiKey'
import { Link } from 'react-router-dom'
import { getCityWeather } from '../../Thunks/getCityWeather'
import { connect } from 'react-redux'

export class SearchForm extends Component {
	constructor() {
		super()
		this.state = {
			searchInfo: '',
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleGetCityWeather = (e) => {
		const cityName = this.state.searchInfo
		const url = `https://api.weatherbit.io/v2.0/current?city=${cityName}&key=${weatherApiKey}`
		this.props.getCityWeather(url)
		this.setState({ searchInfo: '' })
	}

	render() {
		return (
			<form className='search'>
				<div className='search-box'>
					<input
						onChange={this.handleChange}
						name='searchInfo' value={this.state.searchInfo}
						placeholder='Search any US city'
						className='input'
					/>
					<Link
						to={`/cities/${this.state.searchInfo}`}
						onClick={this.handleGetCityWeather}
						className='submit-btn'>Get Current Weather
					</Link>
				</div>
			</form>
		)
	}
}

export const mapDispatchToProps = dispatch => ({
	getCityWeather: (url) => dispatch(getCityWeather(url))
})

SearchForm.propTypes = {
	getCityWeather: PropTypes.func
}


export default connect(null, mapDispatchToProps)(SearchForm)
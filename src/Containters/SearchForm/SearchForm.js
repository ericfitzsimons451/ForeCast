import React, { Component } from 'react'
import './SearchForm.scss'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

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

	handleSubmit = (e) => {
		this.props.getCityWeather(this.state.searchInfo)
		this.setState({ searchInfo: '' })
	}

	render() {
		return (
			<form className='search'>
				<div className='search-box'>
					<input onChange={this.handleChange} name='searchInfo' value={this.state.searchInfo} placeholder='Search any US city' className='input'/>
					<Link to={`/cities/${this.state.searchInfo}`} onClick={this.handleSubmit} className='submit-btn'>Get Current Weather</Link>
				</div>
			</form>
		)
	}
}

SearchForm.propTypes = {
	getCityWeather: PropTypes.func
}


export default SearchForm
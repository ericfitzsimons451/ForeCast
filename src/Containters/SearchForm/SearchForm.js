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
		// e.preventDefault()
		//this preventDefault is getting in the way...
		// probably because there is no button on the form...
		this.props.getCityWeather(this.state.searchInfo)
		this.setState({ searchInfo: '' })
	}

	render() {
		return (
			<form >
				<input onChange={this.handleChange} name='searchInfo' value={this.state.searchInfo} />
				<Link to={`/cities/${this.state.searchInfo}`} onClick={this.handleSubmit}>Get Current Weather</Link>
			</form>
		)
	}
}

SearchForm.propTypes = {
	getCityWeather: PropTypes.func
}


export default SearchForm
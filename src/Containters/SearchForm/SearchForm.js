import React, { Component } from 'react'
import './SearchForm.scss'

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
		e.preventDefault()
		this.props.getCityWeather(this.state.searchInfo)
		this.setState({ searchInfo: '' })
	}

	render() {
		return (
			<form>
				<input onChange={this.handleChange} name='searchInfo' value={this.state.searchInfo} />
				<button onClick={this.handleSubmit}>Submit</button>
			</form>
		)
	}
}

export default SearchForm
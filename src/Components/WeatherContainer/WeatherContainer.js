import React, { Component } from 'react'
import './WeatherContainer.scss'
import City from '../City/City'
import { connect } from 'react-redux'

export class WeatherContainer extends Component {
    
    render() {
        return (
            <City weather={this.props.currentWeather} />
        )
    }
}

export const mapStateToProps = state => ({
    currentWeather: state.currentWeather
})

export default connect(mapStateToProps)(WeatherContainer)
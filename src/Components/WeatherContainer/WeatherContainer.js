import React, { Component } from 'react'
import './WeatherContainer.scss'
import City from '../City/City'
import { connect } from 'react-redux'

export class WeatherContainer extends Component {

    render() {
        return(
            <div className='weather-container'>
                <City key={Date.now()} weather={this.props.currentWeather} />
            </div>
        )
      
    }
}

export const mapStateToProps = state => ({
    currentWeather: state.currentWeather
})

export default connect(mapStateToProps)(WeatherContainer)
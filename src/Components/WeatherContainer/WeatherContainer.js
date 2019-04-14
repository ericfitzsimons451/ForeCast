import React, { Component } from 'react'
import './WeatherContainer.scss'
import City from '../City/City'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

export class WeatherContainer extends Component {

    render() {
        return(
            <div className='weather-container'>
                <City key={23} weather={this.props.currentWeather} />
            </div>
        )
    }
}

WeatherContainer.propTypes = {
    currentWeather: PropTypes.object
}

export const mapStateToProps = state => ({
    currentWeather: state.currentWeather
})

export default connect(mapStateToProps)(WeatherContainer)
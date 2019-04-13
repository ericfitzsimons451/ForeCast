import React, { Component } from 'react';
import './App.css';
import { weatherApiKey } from '../../Helpers/weatherApiKey'
import { Route } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Welcome from '../../Components/Welcome/Welcome'
import SearchForm from '../../Containters/SearchForm/SearchForm'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getCityWeather } from '../../Thunks/getCityWeather'
import WeatherContainer from '../../Components/WeatherContainer/WeatherContainer'

export class App extends Component {

  getCityWeather = (cityName) => {
    const url = `https://api.weatherbit.io/v2.0/current?city=${cityName}&key=${weatherApiKey}`
    this.props.getCityWeather(url)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path='/' render={() => <Welcome />} />
        <SearchForm getCityWeather={this.getCityWeather} />
        {/* <WeatherContainer /> */}
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  getCityWeather: url => dispatch(getCityWeather(url))
})

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  hasError: state.hasError,
  currentWeather: state.currentWeather
})

App.propTypes = {
  getCityWeather: PropTypes.func,
  isLoading: PropTypes.bool,
  hasError: PropTypes.string,
  currentWeather: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

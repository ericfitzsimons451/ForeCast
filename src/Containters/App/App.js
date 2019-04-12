import React, { Component } from 'react';
import './App.css';
import { weatherApiKey } from '../../Helpers/weatherApiKey'
import { Route } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Welcome from '../../Components/Welcome/Welcome'
import SearchForm from '../../Containters/SearchForm/SearchForm'
import { connect } from 'react-redux'
import { getCityWeather } from '../../Thunks/getCityWeather'

class App extends Component {
 
  async componentDidMount() {
  }

  getCityWeather = async (cityName) => {
    const url = `https://api.weatherbit.io/v2.0/current?city=${cityName}&key=${weatherApiKey}`
    this.props.getCityWeather(url)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path='/' render={() => <Welcome />} />
        <SearchForm getCityWeather={this.getCityWeather} />
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

export default connect(null, mapDispatchToProps)(App);

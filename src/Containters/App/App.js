import React, { Component } from 'react';
import './App.css';
import { weatherApiKey } from '../../Helpers/weatherApiKey'
import { Route, Switch } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Welcome from '../../Components/Welcome/Welcome'
import SearchForm from '../../Containters/SearchForm/SearchForm'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getCityWeather } from '../../Thunks/getCityWeather'
import WeatherContainer from '../../Components/WeatherContainer/WeatherContainer'
import Error from '../../Components/Error/Error'

export class App extends Component {
  
  getCityWeather = async (cityName) => {
    const url = `https://api.weatherbit.io/v2.0/current?city=${cityName}&key=${weatherApiKey}`
    this.props.getCityWeather(url)
  }

  render() {
    
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route exact path='/' component={ Welcome } />
        <Route exact path='/search' render={() => <SearchForm getCityWeather={this.getCityWeather} /> } />
        <Route exact path='/cities/:id' render={({match}) => {
          return <WeatherContainer id={match.params} {...this.props.currentWeather} />
          }} />
          <Route component={Error} />
      </Switch>
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

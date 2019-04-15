import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Welcome from '../../Components/Welcome/Welcome'
import SearchForm from '../../Containters/SearchForm/SearchForm'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import WeatherContainer from '../../Components/WeatherContainer/WeatherContainer'
import Error from '../../Components/Error/Error'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={ Welcome } />
          <Route exact path='/search' render={() => <SearchForm /> } />
          <Route exact path='/cities/:id' render={({match}) => {
            return <WeatherContainer id={match.params} {...this.props.currentWeather} />
            }} />
          <Route component={Error} />
      </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  hasError: state.hasError,
  currentWeather: state.currentWeather
})

App.propTypes = {
  isLoading: PropTypes.bool,
  hasError: PropTypes.string,
  currentWeather: PropTypes.object
}

export default connect(mapStateToProps)(App);

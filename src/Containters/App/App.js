import React, { Component } from 'react';
import './App.css';
import { weatherApiKey } from '../../Helpers/weatherApiKey'
import { allPurposeFetch } from '../../Helpers/AllPurposeFetch'
import { Route } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Welcome from '../../Components/Welcome/Welcome'
import SearchForm from '../../Containters/SearchForm/SearchForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      isLoading: false,
      errorMsg: ''
    }
  }

  async componentDidMount() {
    this.getCityWeather()
  }

  getCityWeather = async () => {
    const url = `https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=${weatherApiKey}`
    const cityWeather = await allPurposeFetch(url)
    console.log(cityWeather)
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

export default App;

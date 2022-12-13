import React, { Component } from 'react';
import { WeatherInfo } from './components/WeatherInfo';
import { WeatherFrom } from './components/WeatherFrom';
//hacer ENV la appkey
class App extends Component {
  state = {
      temp: '', desc: '', hum: '', city: '', country: '', error: null, cod: ''
  }
    getWeather = async (e:any) => {
        e.preventDefault();
        const { city, country} = e.target.elements;
        const cityValue =  city.value;
        const countryValue = country.value;
        if ( (cityValue && countryValue) || cityValue ){
          const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${process.env.REACT_APP_TS_APIKEY}&units=metric`
          const response = await fetch(API_URL);
          const data = await response.json();
          if ( data.cod !== 200) {
            this.setState({error: 'Please enter the values correctly'})
          } else {
            this.setState({
              temp: data.main.temp,
              desc: data.weather[0].description,
              hum: data.main.humidity,
              city: data.name,
              country: data.sys.country,
              cod: data.cod
            });
          }
        } else {
          this.setState({error: 'Please enter the values correctly'})
        }
    }

  render() {
    return (
      <div className="container p-5">
          <div className="row">
              <div className="col-md-6 mx-auto">
                  <WeatherFrom getWeather={this.getWeather}/>
                  <WeatherInfo {...this.state}/>
              </div>
          </div>
      </div>
    )
  }
}

export default App;
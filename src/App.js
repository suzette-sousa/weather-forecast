import React from 'react';
import './App.css';
import Heading from './components/Heading';
import Form from './components/Form';
import Forecast from './components/Forecast';

const api_key = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    pressure: "",
    icon: "",
    description: "",
    error: ""
  }

  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=fr&units=metric&appid=${api_key}`);
  
    const response = await api_call.json();
    if(city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        pressure: response.main.pressure,
        icon: response.weather[0].icon,
        description: response.weather[0].description
      })
    } else {
      this.setState({
        error: "Remplir les champs"
      })
    }
  }

  render () {
    return (
      <div className="App">
        <Heading />
        <Form loadWeather={this.getWeather} />
        <Forecast 
        temperature={this.state.temperature}
        humidity={this.state.humidity}
        pressure={this.state.pressure}
        city={this.state.city}
        country={this.state.country}
        description={this.state.description}
        icon={this.state.icon}
        error={this.state.error} />
      </div>
    );
  }
}

export default App;

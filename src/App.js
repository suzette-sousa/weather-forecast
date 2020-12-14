import React from 'react';
import './App.css';
import Heading from './components/Heading';
import Form from './components/Form';

const api_key = "";

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
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
  }

  render () {
    return (
      <div className="App">
        <Heading />
        <Form />
      </div>
    );
  }
}

export default App;

import React from 'react';

const Forecast = (props) => {
  return (
    <div className="weather-data">
      {props.icon && <img src={`https://openweathermap.org/img/w/${props.icon}.png`} alt="Icône temps météo" />}
      {props.country && props.city && <p>Lieu: {props.city}, {props.country}</p>}
      {props.temperature && <p>Température : {props.temperature} °C</p>}
      {props.description && <p>Temps : {props.description}</p>}
      {props.humidity && <p>Humidité : {props.humidity}</p>}
      {props.pressure && <p>Pression athmosphérique : {props.pressure}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  )
}

export default Forecast;

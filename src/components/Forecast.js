import React from 'react';

const Forecast = (props) => {
  return (
    <div>
      {props.country && props.city && <p>Location: {props.city}, {props.country}</p>}
      {props.temperature && <p>Température : {props.temperature}</p>}
      {props.icon && <img src={`https://openweathermap.org/img/w/${props.icon}.png`} alt="weather icon" />}
      {props.error && <p>{props.error}</p>}
    </div>
  )
}

export default Forecast;

import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.loadWeather}>
      <label htmlFor="city">Choisir une ville</label>
      <input id="city" type="text" name="city" placeholder="Paris, Lisbonne..." required />
      <label htmlFor="country">Choisir un pays</label>
      <input id="country" type="text" name="country" placeholder="France, Portugal..." required />
      <button>Afficher la météo</button>
    </form>
  )
}

export default Form;

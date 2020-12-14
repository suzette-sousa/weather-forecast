import React from 'react';

const Form = (props) => {
  return (
    <form>
      <input type="text" name="city" placeholder="Choisir une ville" />
      <input type="text" name="country" placeholder="Choisir un pays" />
      <button>Afficher la météo</button>
    </form>
  )
}

export default Form;

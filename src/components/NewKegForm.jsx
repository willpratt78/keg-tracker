import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types'


function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.price);
    console.log(event.target.brand.price);
    console.log(event.target.price.price);
    console.log(event.target.alcoholContent.price);
  }

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.price, brand: event.target.brand.price, price: event.target.price.price, alcoholContent: event.target.alcoholContent.price, id: v4()})
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input 
          type="text"
          name="name"
          placeholder='Beer Name' />
        <input 
          type="text"
          name="brand"
          placeholder='Beer Brand' />
        <input 
          type="number"
          name="price"
          placeholder='Price' />
        <input 
          type="number"
          name="alcoholContent"
          placeholder='ABV' />
          <button type='submit'>Add Keg!!</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes= {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
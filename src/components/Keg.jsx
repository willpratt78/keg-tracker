import React from "react";
import PropTypes from "prop-types"

function Keg(props){
  return(
    <React.Fragment>
      <h3>{props.name} by {props.brand}</h3>
      <p>${props.price}</p>
      <p>ABV is {props.alcoholContent}%</p>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired
}

export default Keg;
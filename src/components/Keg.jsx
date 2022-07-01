import React from "react";
import PropTypes from "prop-types"

function Keg(props){
  return(
    <React.Fragment>
      <h3>{props.name} by {props.brand}</h3>
      <p>{props.price}</p>
      <p>{props.alcoholContent}</p>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string
}

export default Keg;
import React from "react";
import PropTypes from 'prop-types'

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{props.name} by {props.brand}</h3>
      <p>${props.price}</p>
      <p>ABV is {props.alcoholContent}%</p>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;
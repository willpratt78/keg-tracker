import React from "react";
import PropTypes from 'prop-types';

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name} by {keg.brand}</h3>
      <p>${keg.price}</p>
      <p>ABV is {keg.alcoholContent}%</p>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;
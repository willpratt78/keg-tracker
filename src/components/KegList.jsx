import React from "react";
import Keg from "./Keg";
import PropTypes from 'prop-types'


function KegList(props){
  return (
    <React.Fragment>  
      <hr/>
      {props.kegList.map((keg, index) =>
        <Keg name ={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        key={index}/>
      )}
    </React.Fragment>
  );
}

// Add propTypes for kegList.
KegList.protoTypes = {
  kegList: PropTypes.array
};

export default KegList;


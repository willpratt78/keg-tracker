import React from "react";
import Keg from "./Keg";
import PropTypes from 'prop-types'


function KegList(props){

  return (
    <React.Fragment>  
      <hr/>
      {props.kegList.map((keg) =>
        <Keg 
        whenKegClicked = { props.onKegSelection}
        name ={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        id={keg.id}
        key={keg.id}
        pint={keg.pint}
        sellPint={props.sellPint}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  sellPint: PropTypes.func
};

export default KegList;


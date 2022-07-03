import React from "react";
import Keg from "./Keg";


function KegList(props){
  return (
    <React.Fragment>  
      <hr/>
      {props.kegList.map((keg, index) =>
        <Keg names ={keg.names}
        location={keg.location}
        issue={keg.issue}
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


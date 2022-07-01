import React from "react";
import Keg from "./Keg";


function KegList(props){
  return (
    <React.Fragment>  
      <hr/>
      {props.kegList.map((keg, index) =>
        <Ticket names ={keg.names}
        location={keg.location}
        issue={keg.issue}
        key={index}/>
      )}
    </React.Fragment>
  );
}

// Add propTypes for ticketList.
KegList.protoTypes = {
  kegList: PropTypes.array
};

export default KegList;


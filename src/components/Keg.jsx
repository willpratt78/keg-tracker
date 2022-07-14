import React from "react";
import PropTypes from "prop-types"


class Keg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.pint
    };
  };
  
  render() {
    return (
      <React.Fragment>
        <div onClick={() => this.props.whenKegClicked(this.props.id)}>
          <h3>{this.props.brand} by {this.props.name}</h3>
          <p>Price: {this.props.price}, ABV{this.props.alcoholContent}%</p>
        </div>
        <button 
          onClick={() => this.props.sellPint(this.props.id)}
        >
          Pour a glass
        </button>
        <p>Pints left: {this.props.pint}</p>
      </React.Fragment>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pint: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  sellPint: PropTypes.func
}

export default Keg;
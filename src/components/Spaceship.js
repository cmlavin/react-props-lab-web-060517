import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h5>Name: {this.props.name}</h5>
        <h5>Speed: {this.props.speed}</h5>
        <h5>Has Rockets: {this.props.hasRockets}</h5>
        <h5>Colors: {this.props.colors}</h5>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className='grid'>
        <div className="grid_skew-dark-one"></div>

        <div className="grid_skew-light-one"></div>
        <div className="grid_skew-light-two"></div>
        <div className="grid_skew-light-three-box"></div>
      </div>
    );
  }
}

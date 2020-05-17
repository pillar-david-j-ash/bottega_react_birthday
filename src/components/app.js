import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';

export default class App extends Component {
  render() {
    return (
      <div className='grid'>
        
        <h1 className="grid_title">Birtday Countdown</h1>

        <div className="grid_skew-dark-one"></div>

        <div className="grid_skew-light-one"></div>
        <div className="grid_skew-light-two"></div>
        <div className="grid_skew-light-three-box"></div>

        <Picker/>
        { Button('Generate Countdown') }
      </div>
    );
  }
}

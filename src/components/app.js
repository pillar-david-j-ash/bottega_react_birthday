import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from "./changeDate";
import LargeText from "./largeText";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  }

  handleGenerate = function() {
    this.setState({ active: true })
    var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();
    var x = setInterval(function() {

      var now = new Date().getTime();

      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      const time = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      console.log(time)

      if (distance < 0) {
          clearInterval(x);
      }
    }, 1000);
  }.bind(this);

  renderItems = function() {
    if ( this.state.active ) {
      return [
        <Clock/>,
        ChangeDate('Change Date', () => {this.setState({active: false})}),
        LargeText("04/03"),
        <label className="grid_remaining">Remaining until your 21st birthday</label>
      ]
    } else {
      return [
        <Picker/>,
        Button('Generate Countdown', () => {this.handleGenerate()})
      ]
    }
  }.bind(this)

  render() {
    return (
      <div className='grid'>

        <h1 className="grid_title">Birthday Countdown</h1>

        <div className="grid_skew-dark-one"></div>

        <div className="grid_skew-light-one"></div>
        <div className="grid_skew-light-two"></div>
        <div className="grid_skew-light-three-box"></div>
        { this.renderItems() }
      </div>
    );
  }
}

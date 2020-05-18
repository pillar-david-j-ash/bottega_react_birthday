import React, { Component } from "react"

class Clock extends Component {
    render(){
        return (
            <div className="clock">
                <div className="clock_days">
                    <label className="clock_title">DAYS</label>
                    <label className="clock_amount">20</label>
                </div>
                <div className="clock_hours">
                    <label className="clock_title">HOURS</label>
                    <label className="clock_amount">20</label>
                </div>
                <div className="clock_minutes">
                    <label className="clock_title">MINUTES</label>
                    <label className="clock_amount">20</label>
                </div>
                <div className="clock_seconds">
                    <label className="clock_title">SECONDS</label>
                    <label className="clock_amoun">20</label>
                </div>
            </div>
        )
    }
}

export default Clock;
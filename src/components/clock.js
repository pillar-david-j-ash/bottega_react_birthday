import React, { Component } from "react"

class Clock extends Component {
    render(){
        return (
            <div className="clock">
                <div className="clock_days clock_box">
                    <label className="clock_title">DAYS</label>
                    <label className="clock_amount">300</label>
                </div>
                <div className="clock_hours clock_box">
                    <label className="clock_title">HRS</label>
                    <label className="clock_amount">16</label>
                </div>
                <div className="clock_minutes clock_box">
                    <label className="clock_title">MINS</label>
                    <label className="clock_amount">42</label>
                </div>
                <div className="clock_seconds clock_box">
                    <label className="clock_title">SECS</label>
                    <label className="clock_amount">22</label>
                </div>
            </div>
        )
    }
}

export default Clock;
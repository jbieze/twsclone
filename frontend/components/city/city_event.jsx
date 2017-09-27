import React from 'react';
import { Link } from 'react-router-dom';

class CityEvent extends React.Component {
  constructor(props) {
    super(props);
    this.joinEventButton = this.joinEventButton.bind(this);
  }

  joinEventButton() {
    return (
      <button className="sign-button">Join Event</button>
    );
  }

  render () {
    return (
      <div key={this.props.event.id} className="city-event-container">
        <div className="city-event-info">
          <div className="event-detail">
            <p className="event-location">{this.props.event.location}</p>
            <p className="event-datetime">{this.props.event.date_time}</p>
          </div>
          <div className="address-div">
            <p className="event-address">{this.props.event.address}</p>
          </div>
        </div>
        <div className="join-event-button">
          {this.joinEventButton()}
        </div>
      </div>
    );
  }
}


export default CityEvent;

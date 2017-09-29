import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router';

class CityEvent extends React.Component {
  constructor(props) {
    super(props);
    // this.joinEventButton = this.joinEventButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchCities();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ joins: nextProps.joins });
    }
  }

  handleJoin(id) {
    const join = { event_id: id };
    this.props.createJoin(join);
  }

  handleLeave(id) {
    this.props.removeJoin(id);
  }

  joinEventButton() {
    return (
      <button className="join-button">Join Event</button>
    );
  }

  render() {
    const date = new Date(this.props.event.date_time);
    console.log(this.props.event.date_time);
    console.log(date);
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

export default withRouter(CityEvent);

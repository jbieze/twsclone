import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router';

class CityEvent extends React.Component {
  constructor(props) {
    super(props);
    this.joinEventButton = this.joinEventButton.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  componentDidMount() {
    this.props.fetchCities();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ joins: nextProps.joins });
    }
  }

  handleJoin(e) {
    // debugger;
    // e.preventDefault;
    const join = {
      user_id: this.props.currentUser.id,
      event_id: this.props.event.id
     };
    this.props.createJoin(join);
  }

  handleLeave() {
    this.props.deleteJoin(this.props.event.id);
  }

  // joinEventButton() {
  //   return (
  //     <button className="join-button">Join Event</button>
  //   );
  // }

  joinEventButton() {
    const { city } = this.props;
    const { currentUser } = this.props;

    if (this.props.currentUser) {
      if (this.props.currentUser.joined_events.includes(this.props.event.id)) {
        return (
          <div>
            <button className="join-leave-button" onClick={this.handleLeave} >leave</button>
          </div>
        );
      } else {
        return (
          <div>
            <button className="join-leave-button" onClick={this.handleJoin.bind(this, this.props.event.id)}>join</button>
          </div>
        );
      }
    } else {
      return (
        <Link className="join-leave-link" to='/signup'>Sign In to join</Link>
      );
    }
  }

  render() {
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

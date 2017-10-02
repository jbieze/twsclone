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
    let date = new Date(this.props.event.date_time);
    let weekday = date.toDateString().slice(0, 3);
    let calendarDay = date.toDateString().slice(4, 10);
    let time = date.toTimeString().slice(0, 5);
    console.log(date);
    console.log(date.toTimeString().slice(0, 5));
    return (
      <div key={this.props.event.id} className="city-event-container">
        <div className="city-event-info">
          <div className="event-detail">
            <p className="event-date">{calendarDay}</p>
            <p className="event-day">{weekday}</p>
            <p className="event-time">{time}</p>
            <hr></hr>
          </div>
          <div className="address-div">
            <p className="event-address">{this.props.event.address}</p>
          </div>
          <div className="join-event-button">
            {this.joinEventButton()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CityEvent);

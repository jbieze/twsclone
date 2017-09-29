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
    let joinEventButton;
    if (this.props.currentUser) {
      if (this.props.joinedEvents.includes(event.id)) {
        joinEventButton = <div className="join-leave-button">
          <button onClick={this.handleLeave.bind(this, event.id)}>leave</button>
        </div>;
      } else {
        joinEventButton = <div className="join-leave-button">
          <button onClick={this.handleJoin.bind(this, event.id)}>join</button>
        </div>;
      }
    } else {
      joinEventButton = <Link className="join-leave-button" to='/sign-up'>sign in to join</Link>;
    }
  }


  joinEventButtion() {
  (this.props.currentUser) ?
    (this.props.joinedEvents.includes(event.id) ?
      <div className="join-leave-button">
        <button onClick={this.handleLeave.bind(this, event.id)}>leave</button>
      </div> :

      <div className="join-leave-button">
        <button onClick={this.handleJoin.bind(this, event.id)}>join</button>
      </div> ) :
      <Link className="join-leave-button" to='/sign-up'>sign in to join</Link>;
  }

  render() {
    const date = new Date(this.props.event.date_time);
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

        <div className="join-leave-div">
          { this.joinEventButton() }
        </div>
      </div>
    );
  }
}

export default withRouter(CityEvent);

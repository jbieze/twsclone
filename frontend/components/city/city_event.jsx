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

  render() {
    const { city } = this.props;
    const currentUser = this.props;
    console.log(this.props.city);
    const eventList = city.events.map(event => (
      <ul key={event.id} className="event-index">
        <div className="event-index-card">
          <div className="event-index-top">
            <div className="event-index-datetime">
              <li className="date_time">{this.props.event.date_time}</li>
            </div>
          </div>
          <div className="event-index-bottom">
            <div className="event-index-main-title">
              <li className="dashboard-title">{event.title}</li>
              <li className="address">Address: {event.address}</li>
            </div>

            {this.props.currentUser ?
              (this.props.eventsAttending.includes(event.id) ?
              <div className="join-unjoin-button">
                <button onClick={this.handleDeleteAttendance.bind(this, event.id)}>Unjoin</button>
              </div> :
              <div className="join-unjoin-button">
                <button onClick={this.handleAddAttendance.bind(this, event.id)}>Join</button>
              </div> ) :
              <Link className="join-unjoin-button" to='/sign-up'>Sign In to Join</Link>
            }
          </div>
        </div>
      </ul>
    ));

    return (
      (this.props.city) ?
      <div className="event-index-main-container">
        <div className="event-nav-links">
          <Link to={`/cities/${city.id}/new-event-form`}>Create New Event</Link>
        </div>
        <div className="event-index-container">
          {eventList}
        </div>
      </div> : <div></div>
    );
  }
}

export default withRouter(CityEvent);

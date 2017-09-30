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
    const eventList = (this.props.city) ? city.events.map(event => (
      <ul key={event.id} className="event-index">
        <div className="event-card">
          <div className="event-top">
            <div className="event-index-datetime">
              <li className="date_time">{this.props.event.date_time}</li>
            </div>
          </div>
          <div className="event-bottom">
            <div className="event-address">
              <li className="address">Address: {event.address}</li>
            </div>

            {this.props.currentUser ?
              (this.props.eventsAttending.includes(event.id) ?
              <div className="join-leave-button">
                <button onClick={this.handleLeave.bind(this, event.id)}>leave</button>
              </div> :
              <div className="join-leave-button">
                <button onClick={this.handleJoin.bind(this, event.id)}>join</button>
              </div> ) :
              <Link className="join-leave-button" to='/sign-up'>Sign In to join</Link>
            }
          </div>
        </div>
      </ul>
    )) :
    <div></div>;

    return (
      (this.props.city) ?
      <div className="event-div">
        <div className="create-event">
          <Link to={`/cities/${city.id}/new-event-form`}>Create New Event</Link>
        </div>
        <div className="events-list">
          {eventList}
        </div>
      </div> : <div></div>
    );
  }
}

export default withRouter(CityEvent);

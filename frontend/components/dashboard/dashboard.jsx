import React from 'react';
import { Link } from 'react-router';

class DashboardEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const {events} = this.props;
    const {hostedEvents} = this.props;
    const dashboardEventsList = dashboardEvents.map((event, idx) => (
      <ul key={event.id} className="event-index">
        <div className="event-index-box">
          <div className="event-index-top">
            <div className="event-index-datetime">
              <li className="date-time">{this.props.event.date_time}</li>
            </div>
          </div>
          <div className="event-index-address">
            <li className="address">Address: {event.address}</li>
          </div>
        </div>
      </ul>
    ));

    const eventsMessage = (
    <div className="required-enclosing-div">
      <div className="dashboard-message">
        <div className="dashboard-blurb">
          <h1>You've got a couple events coming up!</h1>
        </div>
      </div>
      <div className="dashboard-message">
        <div className="dashboard-blurb">
          <h1>Here are the events you're hosting!</h1>
        </div>
      </div>
    </div> );

    return (
      <div className="dashboard-container">
        <div className="dashboard-navbar">
          <div className="dashboard-navbar-left">
            <Link to="/dashboard/events">Current Events</Link>
            <Link to="/dashboard/hosting">Hosting Events</Link>
          </div>
          <div className="dashboard-navbar-right">
            <h3>Hello, {this.props.currentUser.first_name}!</h3>
          </div>
        </div>
        <div>
          <div className="dashboard-events-header">
            {dashboardHeader}
          </div>
          <div className="dashboard-content">
            {(dashboardEvents.length > 0) ?
            <div className="dashboard-index-container">
              <div className="dashboard-eventlist">
                {dashboardEventsList}
              </div>
            </div>
            :
            <div>
              <div className="dashboard-message">
                <h1>Seems like your dashboard is empty. Choose a city to join an event!</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardEvents;

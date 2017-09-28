import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';


class CityDetailItem extends Component {
  constructor(props) {
    super(props);
    this.eventButton = this.eventButton.bind(this);
    this.joinEvent = this.joinEvent.bind(this);
    this.leaveEvent = this.leaveEvent.bind(this);
  }

  joinEvent(id) {
    return (
      (e) => {
        e.preventDefault();
        this.props.createJoinedEvent({user_id: this.props.currentUser.id, event_id: id});
      }
    );
  }

  leaveEvent(id) {
  return (
    (e) => {
      e.preventDefault();
      let newUser = this.props.currentUser;
      var removeEventId;

      for (var i = 0; i < newUser.current_events.length; i++) {
          if (newUser.current_events[i].id === id){
              removeEventId = parseInt(newUser.current_events[i].id);
              newUser.current_events.splice(i, 1);
              break;
          }
      }

      this.setState({ ["current_events"]: newUser.current_events });
      this.props.updateUser({ event: parseInt(removeEventId) } );
    }
  );
}

  eventButton() {
    if (!this.props.currentEvents.includes(this.props.event.id)) {
      return (
        <button type="button element" className="btn btn-primary detail-button" onClick={ this.joinEvent(this.props.event.id) } > Join Event </button>
      );
    } else {
      return (
        <button type="button element" className="btn btn-primary detail-button" onClick={ this.leaveEvent(this.props.event.id) } > Leave Event </button>
      );
    }
  }

  render() {
    return (
      <li className="cities-events-item">
        <div className="cities-events-link">
          {this.props.event.name}
        </div>
        <h5 className="cities-events-date">{this.props.event.date}</h5>
        <h5 className="cities-events-descr">{this.props.event.description}</h5>
        {this.eventButton()}
      </li>
    );
  }

}

export default CityDetailItem;

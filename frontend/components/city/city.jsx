import React, { Component } from 'react';
import { withRouter } from 'react-router';
import CityEventContainer from './city_event_container';

class City extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.setCity = this.setCity.bind(this);
    this.renderEvents = this.renderEvents.bind(this);
  }

  componentWillMount() {
    this.props.fetchCity(this.props.match.params.id);
    this.props.fetchEvents(this.props.match.params.id);
  }

  componentDidMount() {
    this.props.fetchCity(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchCity(nextProps.match.params.id);
    }
  }

  handleClick(e) {
    e.preventDefault();
    const user = Object.assign({}, this.props.currentUser);
    user.city_id = this.props.city.id;
    this.props.setCity(this.props.currentUser.id, user);
  }

  setCity() {
    if (this.props.currentUser) {
      if (this.props.currentUser.city_id === this.props.city.id) {
        return (
          <p className="already-set">This is your home city!</p>
        );
      }
      return (
        <a className="set-home-button" href="#" onClick={this.handleClick}>Set as home city</a>
      );
    }
  }

  renderEvents () {
    let { events } = this.props;
    events = events.filter(event => event.city_id === this.props.currentCityId);
    return events.map(event => (
      <CityEventItemContainer key={event.id} event={event}/>
    ));
  }

  render() {
    return (
      <div className="city-container">
        <div className="city-top-chunk" style={{backgroundImage: `url(${this.props.city.img_url})`}}>
          <div className="chunk-pic-div">
            <h1 className="city-show-name">{this.props.city.name}</h1>
            <h4 className="city-show-name-blurb">Let's get tea!</h4>
          </div>
        </div>
        <div className="city-bottom-chunk">
          <h1 className="bottom-big-blurb">Tea Time is a conversation between a few people who know nothing about each other.</h1>
          <p className="bottom-little-blurb">You'll never leave without questions, new perspectives, and the reminder that we're far more the same than we are different.</p>
        </div>
        <div className="home-city-button-div">
          {this.setCity()}
        </div>
        <section className="city-events">
          <div  className='city-events-div'>
            <h2 className='city-events-blurb'>Events in {this.props.city.name}</h2>
              <div className="event">
                {this.renderEvents()}
              </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(City);

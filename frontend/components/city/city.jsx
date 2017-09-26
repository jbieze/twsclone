import React, { Component } from 'react';
import { withRouter } from 'react-router';

class City extends Component {

  constructor(props) {
    super(props);
    this.updateCity = this.updateCity.bind(this);
  }

  componentDidMount() {
    this.props.fetchCity(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.cityId !== nextProps.match.params.cityId) {
      this.props.fetchCity(nextProps.match.params.cityId);
    }
  }

  routeIsCorrect() {
    return parseInt(this.props.match.params.cityId) === this.props.city.id;
  }

  updateCity(e) {
    e.preventDefault();
    this.setState({["city_id"]: this.props.city.id});
    this.props.updateUser({ id: this.props.currentUser.id, city_id: this.props.city.id } );
  }

  render() {

  console.log(this.props.city);
  console.log(this.props.city.id);

    return (
      <div className="city-container">
        <h1 className="city-name">{this.props.city.name}</h1>
        <h4 class-name="city-name-blurb">Let's get tea!</h4>
      </div>
    );
  }
}

export default withRouter(City);

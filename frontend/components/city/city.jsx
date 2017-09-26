import React, { Component } from 'react';

console.log(this);

class City extends Component {
  constructor(props) {
    super(props);
    this.updateCity = this.updateCity.bind(this);
  }

  componentDidMount() {
    this.props.fetchCity(this.props.params.cityId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.cityId !== nextProps.params.cityId) {
      this.props.fetchCity(nextProps.params.cityId);
    }
  }

  routeIsCorrect() {
    return parseInt(this.props.params.cityId) === this.props.city.id;
  }

  updateCity(e) {
    e.preventDefault();
    this.setState({["city_id"]: this.props.city.id});
    this.props.updateUser({ id: this.props.currentUser.id, city_id: this.props.city.id } );
  }

  render() {
    return (
      <div className="city-container">
        <h1 className="city-name">{this.props.city.name}</h1>
      </div>
    );
  }
}
export default City;

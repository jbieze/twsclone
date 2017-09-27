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
    return (
      <div className="city-container">
        <div className="city-top-chunk" style={{backgroundImage: `url(${this.props.city.img_url})`}}>
          <div className="chunk-pic-div">
            <h1 className="city-show-name">{this.props.city.name}</h1>
            <h4 className="city-show-name-blurb">Let's get tea!</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(City);

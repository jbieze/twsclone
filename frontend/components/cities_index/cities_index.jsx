import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class CitiesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCities();
  }

  render() {
    const cityList = this.props.cities.map(city => (
      <div key={city.id} className="city" style={{backgroundImage: `url(${city.img_url})`}}>
        <div className="city-div">
          <Link className="city-name" to={`/cities/${city.id}`}>{city.name}</Link>
        </div>
      </div>
    ));

    return (
      <div>
        <div className="city-blurb">
          <h1 className="dark-center">Set your home city</h1>
          <p className="header-small">Make sure you're the first to hear about Tea With Strangers updates relevant to you!</p>
        </div>
        <div className="city-lists">
          <div className="cities-section">
            <div className="cities-list-header">
              <h2 className="center">We're building communities here</h2>
              <h4 className="center">You should be able to sign up for a tea time today!</h4>
            </div>
            <div className="cities-list">
              <div className="city-index">
                { cityList }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CitiesIndex);

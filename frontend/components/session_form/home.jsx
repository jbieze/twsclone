import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const Home = ({ currentUser }) => {

  if (currentUser) {
    let bannerButton = <Link className="banner-link" tabIndex="-1" to='/cities'>
      <button className='banner-button'>let's get tea</button>
    </Link>;
  } else {
    let bannerButton = <Link className="banner-link" tabIndex="-1" to='/signup'>
      <button className='banner-button'>let's get tea</button>
    </Link>;
  }

  return (
    <div>
      <div className="banner-welcome">
        <div className="banner-img"
          style={{backgroundImage: `url(${'https://raw.githubusercontent.com/TeaWithStrangers/tws-on-rails/master/app/assets/images/landing/landing-graphic-redesign.jpg'})`}}>
        <div className='banner-words'>
          <div className='banner-blurbs'>
            <h1 className='big-banner-blurb'>Everyone is interesting</h1>
            <p className='little-banner-blurb'>But you don't discover that when you're staring at a screen.</p>
          </div>
          <nav>
            <Link className="banner-link" tabIndex="-1" to='/signup'>
              <button className='banner-button'>let's get tea</button>
            </Link>
          </nav>
        </div>
      </div>
      </div>
      <section className='unnecessary-info'>
        <div className="unnecessary-div">
          <h2 className="big-unnecessary-blurb">Show up for a tea time</h2>
          <p className="little-unnecessary-blurb">You and a few others joint a host at a cafe.</p>
        </div>
        <div className="unnecessary-div">
          <h2 className="big-unnecessary-blurb">Have a real conversation</h2>
          <p className="little-unnecessary-blurb">You talk for two hours about anything.</p>
        </div>
        <div className="unnecessary-div">
          <h2 className="big-unnecessary-blurb">See what happens</h2>
          <p className="little-unnecessary-blurb">That's it. No strings attached.</p>
        </div>
      </section>
    </div>
  );
}


export default connect(state => ({currentUser: Boolean(state.session.currentUser)}))(Home);

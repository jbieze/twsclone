import { connect } from 'react-redux';
import { fetchCities } from '../../actions/city_actions';
import CitiesIndex from './cities_index';

const mapStateToProps = state => ({
  cities: Object.keys(state.cities).map(id => state.cities[id])
});

const mapDispatchToProps = dispatch => ({
  fetchCities: () => dispatch(fetchCities())
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesIndex);

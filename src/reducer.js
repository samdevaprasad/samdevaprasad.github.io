import { combineReducers } from 'redux';
import pgaTourPlayerReducer from './reducers/pgaTourPlayerReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  pgaTourPlayerReducer,
  router: routerReducer
});

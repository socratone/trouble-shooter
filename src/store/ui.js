import { combineReducers } from 'redux';
import nav from './reducers/nav';
import preview from './reducers/preview';

export default combineReducers({
  nav,
  preview
});
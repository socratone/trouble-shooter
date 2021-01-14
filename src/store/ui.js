import { combineReducers } from 'redux';
import nav from './reducers/nav';
import preview from './reducers/preview';
import editor from './reducers/editor';

export default combineReducers({
  nav,
  preview,
  editor
});
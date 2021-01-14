import { combineReducers } from 'redux';
import nav from './reducers/nav';
import preview from './reducers/preview';
import troublesEditor from './reducers/troublesEditor';

export default combineReducers({
  nav,
  preview,
  troublesEditor
});
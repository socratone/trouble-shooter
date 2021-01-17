import { combineReducers } from 'redux';
import troublesItems from './reducers/troublesItems';
import previewCode from './reducers/previewCode';
import user from './reducers/user';

export default combineReducers({
  user,
  troublesItems,
  previewCode
});
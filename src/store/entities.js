import { combineReducers } from 'redux';
import troublesItems from './reducers/troublesItems';
import previewCode from './reducers/previewCode';

export default combineReducers({
  troublesItems,
  previewCode
});
import { combineReducers } from 'redux';
import troublesItems from './reducers/troublesItems';
import beginnerItems from './reducers/beginnerItems';
import previewCode from './reducers/previewCode';

export default combineReducers({
  troublesItems,
  beginnerItems,
  previewCode
});
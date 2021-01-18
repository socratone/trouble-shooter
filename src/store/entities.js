import { combineReducers } from 'redux';
import troublesItems from './reducers/troublesItems';
import beginnerItems from './reducers/beginnerItems';
import algorithmItems from './reducers/algorithmItems';
import previewCode from './reducers/previewCode';
import user from './reducers/user';
import editor from './reducers/editor';

export default combineReducers({
  user,
  troublesItems,
  beginnerItems,
  algorithmItems,
  previewCode,
  editor
});
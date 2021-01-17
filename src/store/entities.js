import { combineReducers } from 'redux';
import troublesItems from './reducers/troublesItems';
import previewCode from './reducers/previewCode';
import user from './reducers/user';
import troublesEditor from './reducers/troublesEditor';

export default combineReducers({
  user,
  troublesItems,
  previewCode,
  troublesEditor
});
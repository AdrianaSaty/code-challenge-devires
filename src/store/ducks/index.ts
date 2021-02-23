import { combineReducers } from 'redux';

import todoReducer from './todo.duck';

export default combineReducers({
  todoReducer,
});

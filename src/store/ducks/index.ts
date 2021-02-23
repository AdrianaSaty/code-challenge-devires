import { combineReducers } from 'redux';

import exampleReducer from './example.duck';
import todoReducer from './todo.duck';

export default combineReducers({
  exampleReducer,
  todoReducer,
});

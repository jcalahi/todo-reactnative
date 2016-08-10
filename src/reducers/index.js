import { combineReducers } from 'redux';

import TodosReducer from './todos-reducer.js';
import InputChangeReducer from './input-change-reducer';

const ROOT_REDUCER = combineReducers({
  todoList: TodosReducer,
  inputValue: InputChangeReducer
});

export default ROOT_REDUCER;

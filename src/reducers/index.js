import { combineReducers } from 'redux';

import TodosReducer from './todos-reducer.js';

const ROOT_REDUCER = combineReducers({
  todoList: TodosReducer
});

export default ROOT_REDUCER;

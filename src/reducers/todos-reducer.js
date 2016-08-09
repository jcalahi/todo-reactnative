import * as types from '../constants/constants';

const initialState = {
  todos: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.ADD_ITEM: {
      let arr = state.todos;
      // Check if the item is not added yet
      if (arr.indexOf(action.payload) === -1) {
          return { todos: [...state.todos, action.payload]};
      } else {
        return { todos: [...state.todos] };
      }
    }
    case types.DELETE_ITEM: {
      let arr = state.todos;
      arr.splice(arr.indexOf(action.payload), 1);
      state.todos = arr;
      return { todos: [...state.todos]};
    }
    case types.NULL_ITEM: {
      console.log('field is empty');
      // do something
      return { todos: [...state.todos]};
    }

    default:
      return state;
  }
}


//   // Get reference of the current state
//   let todos = this.state.todos;
//   // Check if task is not added yet
//   if (todos.indexOf(text) === - 1) {
//     todos.push(text);
//     this.setState({ todos: todos });
//   }

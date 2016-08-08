export function addItem(item) {
  // Do nothing when field is empty
  if (item === undefined || item === null || item === '') {
    return {
      type: 'NULL_ITEM',
      payload: item
    };
  } else {
    return {
      type: 'ADD_ITEM',
      payload: item
    };
  }
}

// _handleButton(text) {
//   // Get reference of the current state
//   let todos = this.state.todos;
//   // Check if task is not added yet
//   if (todos.indexOf(text) === - 1) {
//     todos.push(text);
//     this.setState({ todos: todos });
//   }
// }

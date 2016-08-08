// Library imports
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Local imports
import TodoInput from '../containers/todo-input';
import TodoList from '../containers/todo-list';
import reducers from '../reducers';

// Stylesheet
import styles from '../styles/styles';

let store = createStore(reducers);

class TodoProject extends Component {
  render() {
    // todo: wrap tasks in a ListView component
    return (
      <Provider store={ store }>
        <View style={ styles.mainContainer }>
          <View style={ styles.headWrapper }>
            <Text style= { styles.description }>Swipe left to delete an item</Text>
            <TodoInput />
          </View>
          <View style={ styles.bodyWrapper }>
            <TodoList />
          </View>
        </View>
      </Provider>
    );
  }
}

export default TodoProject;

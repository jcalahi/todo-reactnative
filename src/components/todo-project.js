import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';

import TodoDesc from './todo-description.js';
import TodoInput from './todo-input';
import TodoItem from './todo-items';

import styles from '../styles/styles';

class TodoProject extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      todos: [],
      dataSource: dataSource.cloneWithRows(['row 1', 'row 2'])
    };
  }
  render() {
    // todo: wrap tasks in a ListView component
    return (
      <View style={ styles.mainContainer }>
        <View style={ styles.headWrapper }>
          <TodoDesc desc='Swipe left to delete an item' />
          <TodoInput onButtonClicked={ (item) => this._handleButton(item) }/>
        </View>
        <View style={ styles.bodyWrapper }>
          { this._showTodos() }
        </View>
      </View>
    );
  }
  _handleButton(text) {
    // Get reference of the current state
    let todos = this.state.todos;
    // Check if task is not added yet
    if (todos.indexOf(text) === - 1) {
      todos.push(text);
      this.setState({ todos: todos });
    }
  }
  _showTodos() {
    return this.state.todos.map((item, key) => {
      return <TodoItem item={ item } key={ key } onHandleDeleteBtn={ (e) => this._handleDeleteBtn(e) }/>
    });
  }
  _handleDeleteBtn(item) {
    let todos = this.state.todos;
    todos.splice(todos.indexOf(item), 1);
    this.setState({
      todos: todos
    });
  }
}

module.exports = TodoProject;

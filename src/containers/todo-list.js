import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { deleteItem } from '../actions/delete-item';
import TodoItem from './todo-items';
import styles from '../styles/styles';

class TodoList extends Component {
  render() {
    return (
      <View>
          { this._showTodos() }
      </View>
    );
  }
  _showTodos() {
    return this.props.todoList.map((item, key) => {
      return <TodoItem item={ item } key={ key } onHandleDeleteBtn={ () => {this.props.deleteItem(item)}}/>
    });
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteItem: deleteItem }, dispatch);
}

function mapStateToProps(state) {
  return {
    todoList: state.todoList.todos
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

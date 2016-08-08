import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swipeout from 'react-native-swipeout';

import styles from '../styles/styles';

class TodoItem extends Component {
  render() {
    let buttons = [
      {
        text: 'Delete',
        color: '#FFFFFF',
        backgroundColor: 'red',
        onPress: () => { this._handleDeleteBtn(this.props.item) }
      }
    ];
    return (
      <View style={ styles.todoContainer }>
        <Swipeout
          backgroundColor='transparent'
          right={ buttons }
          autoClose={ true }>
          <Text style={ styles.todoItems }>{ this.props.item }</Text>
        </Swipeout>
      </View>
    );
  }
  _handleDeleteBtn(item) {
    this.props.onHandleDeleteBtn(item);
  }
}

export default TodoItem;

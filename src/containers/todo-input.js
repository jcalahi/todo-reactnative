import React, { Component } from 'react';
import { View, TouchableHighlight, TextInput, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addItem } from '../actions/add-item';
import styles from '../styles/styles';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={ styles.flowRight }>
        <TextInput
          style={ styles.textInput }
          value={ this.state.text }
          placeholder='Write an item here'
          clearTextOnFocus={ true }
          maxLength={ 20 }
          onChangeText={ (e) => { this.handleOnChangeText(e) }} />
        <TouchableHighlight
          style={ styles.addButton }
          underlayColor='#99D9F4'
          onPress={ () => { [this.props.addItem(this.state.text), this.clearText() ] }}>
          <Text style={ styles.buttonText }>
            Add
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
  handleOnChangeText(e) {
    this.setState({ text: e });
  }
  // Reset the field
  clearText() {
    this.setState({ text: '' });
  }
}

// Not used in thie component
// function mapStateToProps(state) {
//   return {
//     todoList: state.todoList.todos
//   };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addItem: addItem }, dispatch);
}

export default connect(null, mapDispatchToProps)(TodoInput);

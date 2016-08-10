import React, { Component } from 'react';
import { View, TouchableHighlight, TextInput, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addItem } from '../actions/add-item';
import { resetField } from '../actions/reset-field';
import { onInputChange } from '../actions/input-change';

import styles from '../styles/styles';

class TodoInput extends Component {
  render() {
    return (
      <View style={ styles.flowRight }>
        <TextInput
          style={ styles.textInput }
          value={ this.props.inputValue }
          placeholder='Write an item here'
          clearTextOnFocus={ true }
          maxLength={ 20 }
          onChangeText={ (e) => { this.props.onInputChange(e) }} />
        <TouchableHighlight
          style={ styles.addButton }
          underlayColor='#99D9F4'
          onPress={ () => { [this.props.addItem(this.props.inputValue), this.props.resetField() ] }}>
          <Text style={ styles.buttonText }>
            Add
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    inputValue: state.inputValue
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addItem: addItem,
    onInputChange: onInputChange,
    resetField: resetField
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);

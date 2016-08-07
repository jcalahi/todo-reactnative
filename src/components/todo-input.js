import React, { Component } from 'react';
import { View, TouchableHighlight, TextInput, Text } from 'react-native';

import styles from '../styles/styles';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Type something here'
    }
  }
  render() {
    return (
      <View style={ styles.flowRight }>
        <TextInput
          style={ styles.textInput }
          value={ this.state.text }
          maxLength={ 20 }
          clearTextOnFocus={ true }
          onChangeText={ (e) => { this.handleOnChangeText(e) }} />
        <TouchableHighlight
          style={ styles.addButton }
          underlayColor='#99D9F4'
          onPress={ () => { this.handleAddButton(this.state.text) }}>
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
  handleAddButton(text) {
    // if text is null, don't do anything
    if (!text) {
      return;
    }
    this.props.onButtonClicked(text);
    // Reset after assigning
    this.setState({ text: null });
  }
}

module.exports = TodoInput;

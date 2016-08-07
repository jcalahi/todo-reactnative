import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/styles';

class TodoDesc extends Component {
  render() {
    return (
      <View>
        <Text style={ styles.description }>
          { this.props.desc }
        </Text>
      </View>
    );
  }
}

module.exports = TodoDesc;

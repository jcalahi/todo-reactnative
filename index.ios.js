// Library imports
import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS } from 'react-native';

// Local imports
import App from './src/components/app';

// Styles
import styles from './src/styles/styles';

class TodoApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={ styles.navContainer }
        initialRoute={{
          title: 'React Native and Redux',
          component: App
        }} />
    );
  }
}

AppRegistry.registerComponent('TodoProject', () => TodoApp);

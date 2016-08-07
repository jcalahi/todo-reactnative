// Library imports
import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS } from 'react-native';

// Local imports
import TodoProject from './src/components/todo-project';

// Styles
import styles from './src/styles/styles';

class TodoApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={ styles.navContainer }
        initialRoute={{
          title: 'My Application',
          component: TodoProject
        }} />
    );
  }
}

AppRegistry.registerComponent('TodoProject', () => TodoApp);

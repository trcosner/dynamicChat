import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  View
} from 'react-native';

import Login from './app/pages/login';

export default class dynamicChat extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
        title: 'Login',
        component: Login,
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('dynamicChat', () => dynamicChat);

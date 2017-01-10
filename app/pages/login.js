import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import Title from '../components/title';
import Button from '../components/button';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title value="Login" />
        <TextInput
          style={styles.textInput}
          placeholder='Email'
        />
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder='Password'
        />
        <Button value="Go" color="#48BBEC"/>
        <Button value="Register" color="orange"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  textInput: {
    height: 35,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
    marginBottom: 10,
    alignSelf: 'stretch',
  }
});

AppRegistry.registerComponent('Login', () => Login);

import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={[styles.button, {backgroundColor: this.props.color}, {borderColor: this.props.color}]}>
          <Text style={styles.buttonText}>{this.props.value}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center'
  },
});

AppRegistry.registerComponent('Button', () => Button);

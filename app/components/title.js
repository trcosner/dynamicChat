import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Title extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>
          {this.props.value}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title:{
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  }
});

AppRegistry.registerComponent('Title', () => Title);

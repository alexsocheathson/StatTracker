import React, { Component } from 'react';
import { View } from 'react-native'
import RootStack from './RootStack'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <RootStack />
    );
  }
}

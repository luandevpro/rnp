import React, { Component } from 'react';
import {ActivityIndicator } from 'react-native';

export default class ActivityIndicators extends Component {
  render() {
     var { loading } = this.props;
    return (
      <ActivityIndicator animating={loading} color="white" size="large" />
    );
  }
}

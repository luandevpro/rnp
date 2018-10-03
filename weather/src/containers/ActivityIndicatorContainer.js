import React, { Component } from 'react'
import { Consumer } from '../contexts';
import ActivityIndicators from '../components/ActivityIndicators';

export default class ActivityIndicatorContainer extends Component {
  render() {
    return (
        <Consumer>
           {
              value => <ActivityIndicators 
                           loading={value.loading} 
                        />
           }
        </Consumer>
    )
  }
}
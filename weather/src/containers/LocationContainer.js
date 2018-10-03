import React, { Component } from 'react'
import { Consumer } from '../contexts';
import Location from '../components/Location';

export default class LocationContainer extends Component {
  render() {
    return (
        <Consumer>
           {
              value => <Location 
                           location={value.location} 
                           temperature={value.temperature}
                           weather={value.weather}
                        />
           }
        </Consumer>
    )
  }
}
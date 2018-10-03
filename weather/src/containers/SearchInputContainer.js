import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Consumer } from '../contexts';
import SearchInput from '../components/SearchInput';

export default class SearchInputContainer extends Component {
  render() {
    return (
        <Consumer>
           {
              value => <SearchInput 
                           placeholder={value.placeholder} 
                           dispatchLocation={value.dispatchLocation}
                        />
           }
        </Consumer>
    )
  }
}
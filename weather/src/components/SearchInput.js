import React , { Component } from 'react'
import { TextInput , StyleSheet } from 'react-native';
import * as Types from "../constants/ActionTypes";

export default class SearchInput extends Component {
   constructor(props){
      super(props);
      this.state = {
         text: ""
      }
   }
   onChangeText = text => {
      this.setState({text})
   }
   onSubmitEditing = e => {
      this.props.dispatchLocation({
         type: Types.GET_LOCATION,
         payload: this.state.text
      })
      this.setState({
         text: "",
      })
   }
   render(){
      var {placeholder} = this.props;
      return (
         <TextInput
            autoCorrect={false}
            placeholder={placeholder}
            value={this.state.text}
            placeholderTextColor="white"
            style={styles.textInput}
            clearButtonMode="always"
            underlineColorAndroid="transparent"
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEditing}
         />
      )
   }
}

const styles = StyleSheet.create({
   textInput: {
      backgroundColor: '#666',
      color: 'white',
      height: 40,
      width: 300,
      marginTop: 20,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      alignSelf: 'center',
    },
})
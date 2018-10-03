import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from "../../App";

export default class Location extends Component {
  render() {
     var { location,temperature ,weather} = this.props;
    return (
      <View>
         <Text style={[styles.largeText, styles.textStyle]}>
            {location}
         </Text>
         <Text style={[styles.smallText, styles.textStyle]}>
            {weather}
         </Text>
         <Text style={[styles.largeText, styles.textStyle]}>
            {`${Math.round(temperature)}°`}
         </Text>
      </View>
    );
  }
}
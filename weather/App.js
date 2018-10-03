import React from 'react';
import { StyleSheet, ActivityIndicator, StatusBar,View , Platform , ImageBackground , KeyboardAvoidingView } from 'react-native';
import AppContext from './src/AppContext';
import SearchInputContainer from './src/containers/SearchInputContainer';
import getImageForWeather from "./src/utils/getImageForWeather";
import LocationContainer from './src/containers/LocationContainer';
import ActivityIndicatorContainer from './src/containers/ActivityIndicatorContainer';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
         <StatusBar hidden={true} barStyle="light-content" />
         <ImageBackground 
            source={getImageForWeather('Clear')}
            style={styles.imageContainer}
            imageStyle={styles.image}
         >
            <AppContext>
               <View style={styles.detailsContainer}>
                  <ActivityIndicatorContainer />
                  <LocationContainer />
                  <SearchInputContainer />
               </View>
            </AppContext>
         </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

export const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
   },
   textStyle: {
     textAlign: 'center',
     fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
   },
   largeText: {
     fontSize: 44,
   },
   smallText: {
     fontSize: 18,
   },
   imageContainer: {
      flex: 1,
   },
   image: {
      flex: 1,
      resizeMode: 'cover',
   },
   detailsContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
      paddingHorizontal: 20,
   },
 });

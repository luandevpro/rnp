import React, { Component } from 'react'
import { Provider } from './contexts';
import { location } from "./reducers";
import { fetchLocationId, fetchWeather } from "./utils/api";

export default class AppContext extends Component {
   constructor(props){
      super(props);
      this.state = {
         placeholder: "Search any city !!!",
         location: "",
         loading: false,
         error: false,
         temperature: 0,
         weather: '',
         dispatchLocation: action => 
            this.setState(state => location(state,action)),
      }
   }
   
   componentDidMount(){
      this.handleUpdateLocation("Ho Chi Minh")
   }

   handleUpdateLocation = async city => {
      if (!city) return;
      this.setState({ loading: true }, async () => {
         try {
            const locationId = await fetchLocationId(city);
            const { location, weather, temperature } = await fetchWeather(
               locationId,
            );
         this.setState({
            loading: false,
            error: false,
            location,
            weather,
            temperature,
         });
         } catch (e) {
            this.setState({
            loading: false,
            error: true,
            });
         }
         });
      };
  render() {
     var { children} = this.props;
    return (
      <Provider value={this.state}>{children}</Provider>
    )
  }
}
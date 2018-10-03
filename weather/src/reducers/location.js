import * as Types from "../constants/ActionTypes";
import { Alert } from "react-native";

const appReducer = (state,action) => {
   switch(action.type){
      case Types.GET_LOCATION:
         return {
            ...state,
            location: action.payload
         }
      default:
         return state;   
   }
}
export default appReducer;
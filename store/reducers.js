import { combineReducers } from "redux";
import authorization from './authorization'
import profile from './profile'



const rootReducer = combineReducers({
  authorization,
  profile
});


export default rootReducer;

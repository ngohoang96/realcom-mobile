import { combineReducers } from "redux";
import { authReducer } from "../screens/auth";

export default combineReducers({
  auth: authReducer
});

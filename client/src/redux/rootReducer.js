import { combineReducers } from "redux";
import friendReducer from "./friendReducer/reducer";
const rootReducer = combineReducers({
  friendReducer,
});

export default rootReducer;

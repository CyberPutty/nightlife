import { combineReducers } from "redux";
import search from "./search";
import focusVenue from"./focusVenue";

const Reducers = combineReducers({
  search,
  focusVenue,
  
});

export default Reducers;

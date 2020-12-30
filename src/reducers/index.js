import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import beerReducer from "./beerReducer";

export default combineReducers({
  beers: beerReducer,
  styles: beerReducer,
  formReducer: formReducer,
});

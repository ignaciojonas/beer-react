import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import beerReducer from "./beerReducer";
import styleReducer from "./styleReducer";

export default combineReducers({
  beers: beerReducer,
  styles: styleReducer,
  form: formReducer,
});

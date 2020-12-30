import beers from "../apis/beers";
import { FETCH_BEERS, FETCH_STYLES, CREATE_BEER } from "./types";

export const fetchBeers = () => async (dispatch) => {
  const response = await beers.get("beers");
  dispatch({ type: FETCH_BEERS, payload: response.data });
};

export const fetchStyles = () => async (dispatch) => {
  const response = await beers.get("styles");
  console.log(response);
  dispatch({ type: FETCH_STYLES, payload: response.data });
};

export const createBeer = (formValues) => async (dispatch) => {
  const response = await beers.post("beers", { ...formValues });
  dispatch({ type: CREATE_BEER, payload: response.data });
};

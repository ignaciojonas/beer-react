import beers from "../apis/beers";
import { FETCH_BEERS, FETCH_STYLES, CREATE_BEER, DELETE_BEER } from "./types";

export const fetchBeers = () => async (dispatch) => {
  const response = await beers.get("beers");
  dispatch({ type: FETCH_BEERS, payload: response.data });
};

export const fetchStyles = () => async (dispatch) => {
  const response = await beers.get("styles");
  dispatch({ type: FETCH_STYLES, payload: response.data });
};

export const createBeer = (formValues) => async (dispatch) => {
  const response = await beers.post("beers", { beer: { ...formValues } });
  dispatch({ type: CREATE_BEER, payload: response.data });
};

export const deleteBeer = (id) => async (dispatch) => {
  const response = await beers.delete(`beers/${id}`);
  dispatch({ type: DELETE_BEER, payload: response.data });
};

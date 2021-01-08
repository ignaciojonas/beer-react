import { FETCH_BEERS, CREATE_BEER } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BEERS:
      return { ...state, ...action.payload };
    case CREATE_BEER:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

import { FETCH_BEERS, CREATE_BEER, DELETE_BEER } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BEERS:
      return { ...state, ...action.payload };
    case CREATE_BEER:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_BEER:
      return Object.values(state).filter(
        (item) => item.id !== action.payload.id
      );

    default:
      return state;
  }
};

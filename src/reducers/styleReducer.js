import { FETCH_STYLES } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STYLES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

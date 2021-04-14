import * as actionTypes from "../actionTypes";
export const userDetails = (
  state = {
    userDetails: null,
    isLoggedIn: false,
    token: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
        isLoggedIn: true,
      };
    case actionTypes.ADD_USER_TOKEN:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
      };
    default:
      return state;
  }
};

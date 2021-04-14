import * as actionTypes from "../actionTypes";
export const addUserDetails = (userDetails) => ({
  type: actionTypes.ADD_USER_DETAILS,
  payload: userDetails,
});
export const addUserToken = (token) => ({
  type: actionTypes.ADD_USER_TOKEN,
  payload: token,
});

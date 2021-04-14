import * as actionTypes from "../actionTypes";
export const addSuccessAlert = (message) => ({
  type: actionTypes.SUCCESS_ALERT,
  payload: message,
});
export const addFailureAlert = (message) => ({
  type: actionTypes.FAILURE_ALERT,
  payload: message,
});
export const addInfoAlert = (message) => ({
  type: actionTypes.INFO_ALERT,
  payload: message,
});
export const addWarningAlert = (message) => ({
  type: actionTypes.WARNING_ALERT,
  payload: message,
});

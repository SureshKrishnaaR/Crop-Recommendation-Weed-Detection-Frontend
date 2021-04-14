import * as actionTypes from "../actionTypes";
export const alertDetails = (
  state = {
    message: null,
    isError: false,
    isSucessful: false,
    isInfo: false,
    isWarning: false,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.SUCCESS_ALERT:
      return {
        ...state,
        message: action.payload,
        isError: false,
        isSucessful: true,
        isInfo: false,
        isWarning: false,
      };
    case actionTypes.FAILURE_ALERT:
      return {
        ...state,
        message: action.payload,
        isError: true,
        isSucessful: false,
        isInfo: false,
        isWarning: false,
      };
    case actionTypes.INFO_ALERT:
      return {
        ...state,
        message: action.payload,
        isError: false,
        isSucessful: false,
        isInfo: true,
        isWarning: false,
      };
    case actionTypes.WARNING_ALERT:
      return {
        ...state,
        message: action.payload,
        isError: false,
        isSucessful: false,
        isInfo: false,
        isWarning: true,
      };

    default:
      return state;
  }
};

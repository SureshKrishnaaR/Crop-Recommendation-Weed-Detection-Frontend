import * as actionTypes from "../actionTypes";
export const backDropDetails = (
  state = {
    showBackdrop: false,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.SHOW_BACKDROP:
      return {
        ...state,
        showBackdrop: true,
      };
    case actionTypes.HIDE_BACKDROP:
      return {
        ...state,
        showBackdrop: false,
      };
    default:
      return state;
  }
};

import { createStore, combineReducers } from "redux";
import { userDetails } from "./Reducers/user.reducer";
import { alertDetails } from "./Reducers/alert.reducer";
import { backDropDetails } from "./Reducers/backdrop.reducer";
export const configureReducer = () => {
  const store = createStore(
    combineReducers({
      userDetails,
      alertDetails,
      backDropDetails,
    })
  );
  return store;
};

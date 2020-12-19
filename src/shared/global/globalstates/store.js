import { createStore, combineReducers } from "redux";

import postReducer from "./reducers/postReducer";
import authReducer from "./reducers/authReducer";

const store = createStore(
  combineReducers({
    pts: postReducer,
    auth: authReducer,
  })
);

export default store;

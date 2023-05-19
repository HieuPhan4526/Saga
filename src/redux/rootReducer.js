import { combineReducers } from "redux";

import UsersReducer from "./reducers";

const rootReducer = combineReducers({
  UsersReducer,
});

export default rootReducer;

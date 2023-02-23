import { combineReducers } from "redux";
// slices
// import designReducer from './slices/design';
import userReducer from "./slices/user";

// ----------------------------------------------------------------------

const rootReducer = combineReducers({
  user: userReducer,
});

export { rootReducer };

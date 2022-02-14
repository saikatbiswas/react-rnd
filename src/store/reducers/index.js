import { combineReducers } from "redux";
import user from './userReducer';
import errors from "./errorHandlerReducers";
import dashboard from "./dashboardReducer";

const rootReducer = combineReducers({
    user,
    errors,
    dashboard
});

export default rootReducer;
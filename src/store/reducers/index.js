import { combineReducers } from "redux";
import user from './userReducer';
import errors from "./errorHandlerReducers";

const rootReducer = combineReducers({
    user,
    errors
});

export default rootReducer;
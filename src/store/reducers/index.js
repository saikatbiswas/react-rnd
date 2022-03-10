import { combineReducers } from "redux";
import user from './userReducer';
import errors from "./errorHandlerReducers";
import dashboard from "./dashboardReducer";
import learnWithMentor from "./learnWithMentorReducer";

const rootReducer = combineReducers({
    user,
    errors,
    dashboard,
    learnWithMentor
});

export default rootReducer;
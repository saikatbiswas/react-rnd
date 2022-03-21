import { combineReducers } from "redux";
import user from './userReducer';
import errors from "./errorHandlerReducers";
import dashboard from "./dashboardReducer";
import learnWithMentor from "./learnWithMentorReducer";
import notification from "./notificationReducer";

const rootReducer = combineReducers({
    user,
    errors,
    dashboard,
    learnWithMentor,
    notification
});

export default rootReducer;
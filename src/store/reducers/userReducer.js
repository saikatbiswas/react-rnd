import { actionType } from "store/type";
let DEFAULT_USER_STATE = {
    students:[],
    student_id:null,
    menu_practice_count:[],
    parent:{},
    expires_in:null,
    is_due:null,
    auth:false
}

export default function userReducer(state=DEFAULT_USER_STATE, action) {
    // console.log(action.payload);
    switch (action.type) {
        case actionType.USER_AUTHINTICATE:
            return{
                ...state,...action.payload,
                auth: action.payload.access_token?true:false
            }
        case actionType.USER_SIGNOUT:
            return{
                ...DEFAULT_USER_STATE,
                auth:false
            }
    
        default:
            return state;
    }
}
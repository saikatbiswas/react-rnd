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
    switch (action.type) {
        case actionType.USER_AUTHINTICATE:
            return{
                ...state,
                userData:{...action.payload.data},
                auth: action.payload.data?true:false
            }
    
        default:
            return state;
    }
}
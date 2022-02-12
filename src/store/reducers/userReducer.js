import { actionType } from "store/type";
let DEFAULT_USER_STATE = {
    data:{
        _id:null,
        fullname:null,
        email:null,
        phone:null,
        historyuser:[],
        historyseller:[],
        issocalregister:null,
        verified:null
    },
    auth:null,
    cart:[],
    sell:[]
}

export default function userReducer(state=DEFAULT_USER_STATE, action) {
    switch (action.type) {
        case actionType.USER_AUTHINTICATE:
            return{
                ...state,
                userData:{...action.payload},
                auth: action.payload?true:false
            }
    
        default:
            return false;
    }
}
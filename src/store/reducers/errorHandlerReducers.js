import { actionType } from "store/type";

export default function errorHandlerReducers(state={}, action){
    switch(action.type){
        case actionType.GLOBAL_ERROR:
            return {
                ...state,
                error: true,
                msg: action.payload
            }
        case actionType.CLEAR_GLOBAL_ERROR:
            return { ...state, error: false, msg:'' }
        
        default:
            return state;
    }
}
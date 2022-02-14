import { actionType } from "store/type";

export default function dashboardReducer( state={}, action ){
    switch(action.type){
        case actionType.DASHBOARD_DATA_SUCCESS:
            return{
                ...state, ...action.payload
            }
        default:
            return state;
    }

}
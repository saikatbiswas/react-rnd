import { actionType } from "store/type";

export default function learnWithMentor(state={}, action){
    switch(action.type){
        case actionType.LEARN_WITH_MENTOR_SUCCESS:
            return {...state, ...action.payload}
        default:
            return state
    }
}
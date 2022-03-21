import { actionType } from "store/type";

const noticeFormTeacherDefault = {
    allnoticeids: [],
    postVal:"",
    perpage:null,
    allnotice_cnt:null
}

export default function notificationReducer(state=noticeFormTeacherDefault, action){
    switch(action.type){
        case actionType.NOTICE_FORM_TEACHER_LIST_REQUEST:
            return{ ...state, fromAdmin:action.payload }
        default:
        return state
    }
}
import { actionType } from "../type";

export const getNoticeFormTeacherList = ({studentId})=>({
    type: actionType.NOTICE_FORM_TEACHER_LIST_REQUEST,
    payload: studentId
});

export const successNoticeFormTeacherList = (data)=>({
    type: actionType.NOTICE_FORM_TEACHER_LIST_SUCCESS,
    payload: data
});
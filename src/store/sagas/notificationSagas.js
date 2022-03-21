import { takeLatest, call, put, fork } from "redux-saga/effects";
import * as actions from '../actions/notificationActions';
import * as errorActions from '../actions/errorHandlerActions';
import * as api from '../api/notificationApi';
import { actionType } from "store/type";

function* getNoticeFormTeacherList(action){
    try{
       
        const data = yield call(api.getNoticeFormTeacherList, action.payload);
        yield call(actions.successNoticeFormTeacherList(data));

    }catch(error){
        yield put(errorActions.globalError(error));
    }
}

function* getNoticeFormTeacherListWatcher(){
    yield takeLatest(actionType.NOTICE_FORM_TEACHER_LIST_REQUEST, getNoticeFormTeacherList);
}

const notificationsSagas = [
    fork(getNoticeFormTeacherListWatcher)
]

export default notificationsSagas;

import { takeLatest, fork, call, put, takeEvery } from 'redux-saga/effects'
import { actionType } from "store/type";
import * as actions from '../actions/userAction';
import * as errorActions from '../actions/errorHandlerActions';
import * as api from '../api/userApi';


function* userLogin(action){
    try{
        const userData = yield call(api.userLoginApi, action.payload);
        yield put(actions.userAuthintication(userData))
    }catch(error){
        // console.log(error);
        yield put(errorActions.globalError(error));
    }
}

function* watchUserLogin(){
    yield takeLatest(actionType.USER_LOGIN, userLogin);
}

function* userIsAuth(){
    try{
        const userData = yield call(api.userIsAuth);
        yield put(actions.userAuthintication(userData));
    }catch(error){
        yield put(errorActions.globalError(error));
    }
    
}

function* watchUserIsAuth(){
    yield takeEvery(actionType.USER_IS_AUTH, userIsAuth);
}

const userSagas = [
    fork(watchUserLogin),
    fork(watchUserIsAuth)
];

export default userSagas;

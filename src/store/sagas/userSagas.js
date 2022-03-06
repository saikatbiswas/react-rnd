import { takeLatest, fork, call, put, takeEvery, take } from 'redux-saga/effects';
import { getAuthHeader, setCookie, removeCookie, getCookie } from 'utils/cookie';
import { actionType } from "store/type";
import * as actions from '../actions/userAction';
import * as errorActions from '../actions/errorHandlerActions';
import * as api from '../api/userApi';


function* userLogin(action){
    try{
        const userData = yield call(api.userLoginApi, action.payload);
        setCookie(userData.access_token);
        // console.log('userData222',userData)
        localStorage.setItem('user', JSON.stringify(userData))
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
        if(getAuthHeader()){
            const storeUserData = JSON.parse(localStorage.getItem('user'));
            yield put(actions.userAuthintication(storeUserData));
        }else{
            yield localStorage.removeItem('user');
            yield put(actions.userAuthintication({auth:false}));
        }
        
    }catch(error){
        yield put(errorActions.globalError(error));
    }
    
}

function* watchUserIsAuth(){
    yield takeEvery(actionType.USER_IS_AUTH, userIsAuth);
}

function* userSignOut(action){
    // const { history } = action.payload;
    // console.log(action.payload);
    const user = yield call(api.userLogoutApi);
    yield localStorage.removeItem('user');
    yield removeCookie();
    
    // console.log(user)
    
    // yield action.payload.push('/');
    if(!localStorage.getItem('user')){
        console.log(localStorage.getItem('user'));
        // yield removeCookie();
        // yield localStorage.removeItem('user');
        // yield action.payload.push('/');
    }
    
    
    // 
    // alert('1');
    
}

function* watchUserSignOut(){
    yield takeEvery(actionType.USER_SIGNOUT, userSignOut)
}

const userSagas = [
    fork(watchUserLogin),
    fork(watchUserIsAuth),
    fork(watchUserSignOut)
];

export default userSagas;

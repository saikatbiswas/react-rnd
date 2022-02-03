import { actionType } from "store/type";
import { takeEvery, put, fork } from "redux-saga/effects";

function* globalError(action){
    yield console.log(action);
}

function* watchGlobalError(){
    yield takeEvery(actionType.GLOBAL_ERROR, globalError)
};

const errorHandlerSaga = [
    fork(watchGlobalError)
];

export default errorHandlerSaga;
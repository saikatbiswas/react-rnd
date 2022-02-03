import { all } from 'redux-saga/effects';
import userSagas from './userSagas';
// import errorHandlerSaga from './errorHandlerSagas';

export default function* rootSagas(){
    yield all([
        ...userSagas
    ]);
}
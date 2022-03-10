import { all } from 'redux-saga/effects';
import userSagas from './userSagas';
import dashboardSagas from './dashboardSagas';
import learnWithMentorSagas from './learnWithMentorSagas';
// import errorHandlerSaga from './errorHandlerSagas';

export default function* rootSagas(){
    yield all([
        ...userSagas,
        ...dashboardSagas,
        ...learnWithMentorSagas
    ]);
}
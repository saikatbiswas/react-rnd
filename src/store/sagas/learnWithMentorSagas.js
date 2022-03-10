import { takeEvery, call, put, fork  } from "redux-saga/effects";
import { actionType } from "store/type";
import * as actions from '../actions/learnWithMentorActions';
import * as errorActions from '../actions/errorHandlerActions';
import * as api from '../api/learnWithMentorApi'


function* learnWithMentor(action){
    try{
        const data = yield call(api.getLearnWithMentor, action.payload);
        yield put(actions.successLearnWithMentor(data))
    }catch(error){
        yield put(errorActions.globalError(error));
    }
    
}

function* learnWithMentorWatch(){
    yield takeEvery(actionType.LEARN_WITH_MENTOR_REQUEST, learnWithMentor);
}

const learnWithMentorSagas = [
    fork(learnWithMentorWatch)
];

export default learnWithMentorSagas;
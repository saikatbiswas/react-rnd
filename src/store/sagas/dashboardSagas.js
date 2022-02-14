import { fork, call, put, takeEvery } from 'redux-saga/effects';
import { actionType } from "store/type";
import * as actions from '../actions/dashboardActions';
import * as errorActions from '../actions/errorHandlerActions';
import * as api from '../api/dashboardApi';

function* getGadhboardData(action){
    try{
        const dashboardData = yield call(api.getDashboardData, action.payload);
        yield put(actions.dashboardDataSuccess(dashboardData));

    }catch(error){
        yield put(errorActions.globalError(error));
    }
}


function* watchGetDashboardData(){
    yield takeEvery(actionType.GET_DASHBOARD_DATA, getGadhboardData)
}

const dashboardSagas = [
    fork(watchGetDashboardData)
];

export default dashboardSagas;
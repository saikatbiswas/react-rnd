import { actionType } from "store/type";


export const getDashboardData = (param)=>({
    type: actionType.GET_DASHBOARD_DATA,
    payload:param
});

export const dashboardDataSuccess = (data)=>({
    type: actionType.DASHBOARD_DATA_SUCCESS,
    payload:data
});
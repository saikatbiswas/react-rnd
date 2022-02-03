import { actionType } from "store/type";

export const globalError = (data)=>({
    type: actionType.GLOBAL_ERROR,
    payload: data
});

export const clearGlobalError = ()=>({
    type: actionType.CLEAR_GLOBAL_ERROR
});

import { actionType } from '../type';

export const getLearnWithMentor = (param)=>({
    type:actionType.LEARN_WITH_MENTOR_REQUEST,
    payload:param
});

export const successLearnWithMentor = (data)=>({
    type:actionType.LEARN_WITH_MENTOR_SUCCESS,
    payload:data
});
import axiosInstance from "store/axiosInstance";

export const getLearnWithMentor = (param)=>{
    const data = axiosInstance.get(`users/learnWithMentor`,{
        params:{
            'start_date':param?param.start_date:'',
            'end_date':param?param.end_date:'',
        }
    });
    return data;
}

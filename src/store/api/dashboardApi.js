import axiosInstance from "store/axiosInstance";

export const getDashboardData = (param)=>{
    const data = axiosInstance.get(`users/parent`,{
        params:{
            'student_id':param
        }
    });
    return data;
}
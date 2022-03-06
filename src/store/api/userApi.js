import axiosInstance from "store/axiosInstance";
import { getCookie } from "utils/cookie";

export const userLoginApi = ({email, password})=>{
    const logindata = axiosInstance.post(`users/login`,{
        email,
        password
    });
    return logindata;
}

export const userIsAuth = ()=>{
    if(getCookie()){
        // const user = axios.get(`/api/auth/isAuth`, getAuthHeader());
        const user = axiosInstance.get(`/auth/isAuth`);
        return user;
    }else{
        return null
    }
}
export const userLogoutApi = ()=>{
    if(getCookie()){
        // const user = axios.get(`/api/auth/isAuth`, getAuthHeader());
        const user = axiosInstance.post(`/users/logout`);
        return user;
    }else{
        return null
    }
}


// export const userLogin = ({userid, password})=>{
//     const userData = axios.post(`${USER_SERVER}signin`,{
//         userid,
//         password
//     });
//     return userData;
//     // return axios.post(`${USER_SERVER}signin`,{
//     //     userid,
//     //     password
//     // });
//     // const userData = axios.post(`https://concertium.captainschair-dev.app/api/v1/login`,{
//     //     email:userid,
//     //     password
//     // });
//     // return userData;
// }



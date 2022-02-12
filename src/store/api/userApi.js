import axios from "axios";
import { getAuthHeader, setCookie } from "utils/cookie";

export const userLoginApi = ({userid, password})=>{
    const logindata = axios.post(`users/login`,{
        email:userid,
        password
    });
    if(logindata.access_token){
        setCookie(logindata.access_token);
    }
    return logindata;
}
export const userIsAuth = ()=>{
    if(getAuthHeader()){
        // const user = axios.get(`/api/auth/isAuth`, getAuthHeader());
        const user = axios.get(`/api/auth/isAuth`);
        return user;
    }else{
        return {
            auth:false
        }
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



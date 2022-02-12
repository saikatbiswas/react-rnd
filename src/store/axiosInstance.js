
import axios from 'axios';
import { getCookie } from "utils/cookie";

// let headers = {}
// if(getCookie()){
//     headers =  {'Authorization': `Bearer ${getCookie()}` }
// }

const axiosInstance = axios.create({
    baseURL: '/api'
});
axiosInstance.interceptors.request.use(
    response=>{
        if(response.method === 'post'){
            response.headers.post['Content-Type'] = 'application/json';
        }
        if(!response.url.includes('signin')){
            response.headers.Authorization = `Bearer ${getCookie()}`
        }
        return response;
    },error=>{
        // console.log('int req error', error)
        return Promise.reject(error);
    }
);
axiosInstance.interceptors.response.use(
    response=>{
        return response.data;
    },
    error=>{
        // console.log('int res error', error)
        return Promise.reject(error.response.data.message);
    }
);

export default axiosInstance

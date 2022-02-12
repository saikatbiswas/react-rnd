import { Cookies } from "react-cookie";
const cookies = new Cookies();

export const getCookie = ()=>{
    return cookies.get('x-access-token');
}

export const removeCookie = () =>{
    return cookies.remove('x-access-token');
}

export const getAuthHeader = ()=>{
    if(getCookie()){
        return { headers: {'Authorization': `Bearer ${getCookie()}` }}
    }
    
}
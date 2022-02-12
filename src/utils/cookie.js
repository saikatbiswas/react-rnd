import { Cookies } from "react-cookie";
const cookies = new Cookies();

export const setCookie = (token)=>{
    return cookies.set('x-access-token', token);
}

export const GetCookie = ()=>{
    return cookies.get('x-access-token');
}

export const RemoveCookie = () =>{
    return cookies.remove('x-access-token');
}

export const getAuthHeader = ()=>{
    if(GetCookie()){
        return { headers: {'Authorization': `Bearer ${GetCookie()}` }}
    }
    
}
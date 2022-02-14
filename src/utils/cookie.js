import { Cookies } from "react-cookie";
const cookies = new Cookies();

export const setCookie = (token)=>{
    return cookies.set('x-access-token', token);
}

// export const setUserCookie = (data)=>{
//     // console.log('dataUser', data)
//     const dataUser = localStorage.setItem('user', data)
    
//     return dataUser;
// }
// export const getUserCookie = ()=>{
//     console.log('setUserCookie()', setUserCookie())
//     if(setUserCookie()){
//         return setUserCookie();
//     }
// }

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
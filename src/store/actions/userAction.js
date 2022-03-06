import { actionType } from "store/type";
// import * as api from '../api/userApi';

export const userLogin = (data)=>({
    type: actionType.USER_LOGIN,
    payload: data
    
});
// export const LoginSuccess = (data)=>({
//     type: actionType.LOGIN_SUCCESS,
//     payload: data
    
// });

export const userIsAuth = ()=>({
    type: actionType.USER_IS_AUTH
});

export const userAuthintication = (data)=>({
    type: actionType.USER_AUTHINTICATE,
    payload: data
});

export const userSignout = (history)=>({
    type: actionType.USER_SIGNOUT,
    payload: history
});


// export const userIsAuth = ()=>{
//     return async(dispatch) => {
//         try{

//             const site = await axios.get(`/api/site`);
//             dispatch(actions.siteGetVars(site.data))
            
//             if(!getTokenCookie()){
//                 throw new Error();
//             }

//             const user = await axios.get(`/api/auth/isAuth`, getAuthHeader());
            
//             dispatch(actions.userAuthenticate({data:user.data, auth:true}))

//         }catch(error){
//             dispatch(actions.userAuthenticate({data:{}, auth:false}))
//         }
//     }
// }

// export const getUserSuccess= ({items})=>({
//     type:types.GET_USER_SUCCESS,
//     payload: items
// });


// export const userLogin = async (data)=>{
//     return(dispatch)=>{
//         const userData = await api.userLoginApi({userId: data.email, password: data.password});

//         dispatch({
//             type: actionType.USER_LOGIN,
//             payload: userData
//         })
        
//     }
    
// }
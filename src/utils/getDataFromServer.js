import {categoryUrl,LOAD_CATEGORY,LOAD_USER,productUrl,LOAD_PRODUCTS,signinUrl, signupUrl, TOKEN} from "../utils/constants";
import axios from "axios";

export const getCategoryFromServer=async(dispatch)=>{
 
    try {
        const response = await axios.get(categoryUrl);
        if (response.status === 200) {
            dispatch({type:LOAD_CATEGORY,payload:response.data.categories});
        }
    } catch (error) {
        console.log(error);
    }
}
export const getProductFromServer=async(dispatch)=>{
 
    try {
        const response = await axios.get(productUrl);
        if (response.status === 200) {
            dispatch({type:LOAD_PRODUCTS,payload:response.data.products});
        }
    } catch (error) {
        console.log(error);
    }
}

export const signupOnServer=async(userDetails,authDispatch)=>{
    try{
        console.log(userDetails);
        const response=await axios.post(signupUrl,
            {
              firstName:userDetails.firstName,
              lastName:userDetails.lastName,
              email:userDetails.email,
              password:userDetails.password
            });
            console.log(response.status);
            if(response.status===201){
                localStorage.setItem("sessiontoken",response.data.encodedToken)
                authDispatch({type:TOKEN,payload:response.data.encodedToken})
            }
            
    }catch(error){
        console.log(error);
    }
}
export const loginToServer=async(userDetails,authDispatch)=>{
    try{
        const response=await axios.post(signinUrl,
            {
              email:userDetails.email,
              password:userDetails.password
            });
            if(response.status===200){

                localStorage.setItem("sessiontoken",response.data.encodedToken)
                authDispatch({type:TOKEN,payload:response.data.encodedToken})
                localStorage.setItem("setUser",JSON.stringify(response.data.foundUser));
                //console.log(response.data.foundUser)
                 authDispatch({type:LOAD_USER,payload:response.data.foundUser})
            }

            
    }catch(error){
        console.log(error);
    }
}
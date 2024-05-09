import axios from "axios";
const uri = 'http://localhost:4000/api';


const config= {
    withCredentials: true,
 }

 export const getApiCall = async(endpoint,data) =>{
    try{
       const response = await axios.get(uri+endpoint,{
          params:{
             data,
          },
          ...config
       });
       return {success: true, data: response.data}
    }
    catch(error){
      return {success: false, data: error?.response.data};    }
 }
 
 
 export const postApiCall= async(endpoint, data={})=>{
    try {
     const response = await axios.post(uri+endpoint,data,{...config}); 
     return {success: true, data: response.data} 
    } catch (error) {
     return {success: false, data: error?.response.data};
    }
 }

 export const patchApiCall= async(endpoint, data={})=>{
   try {
    return await axios.post(uri+endpoint,data,{...config});  
   } catch (error) {
    return error?.response;
   }
}
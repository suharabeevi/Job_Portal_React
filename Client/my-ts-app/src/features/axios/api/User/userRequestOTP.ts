import axios,{AxiosRequestConfig} from "axios";
import configKeys from "../../../../utils/config";
import apiConfig from "../../../../utils/apiConfig";

export const userRequestOTP = async(email:string)=>{
    try{
        const obj = {
            email
        }
        const config:AxiosRequestConfig = {
            url:configKeys.API_URL+apiConfig.USER_REQUEST_OTP,
            method: 'post',
            data: obj
        }
        const response = await axios(config);
        return response?.data
    }catch(err:any){
        if(err.message === 'Request failed with status code 401'){
            throw new Error('Could not find user in this Email.Create an account')
        }else{
            throw new Error('something went wrong! while senting OTP')
        }
    }
}
import axios,{AxiosRequestConfig} from "axios";
import configKeys from "../../../../utils/config";
import apiConfig from "../../../../utils/apiConfig";
export const userUpdatePasswordWithEmail= async(obj:any)=>{
    try{
        const config:AxiosRequestConfig= {
            url: configKeys.API_URL+apiConfig.USER_UPDATE_PASSWORD_WITH_EMAIL,
            method:'post',
            data: obj
        }
        const response = await axios(config)
        return response.data
    }catch(err:any){
        throw new Error('something went wrong!')
    }
}
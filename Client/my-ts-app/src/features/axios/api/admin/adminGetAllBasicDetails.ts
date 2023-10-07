import {AxiosRequestConfig} from 'axios'

import configKeys from '../../../../utils/config';
import apiConfig from '../../../../utils/apiConfig';

import adminSetupAxiosInterceptors from '../../intercepters/adminAxiosInterceptor';
const api = adminSetupAxiosInterceptors();

export const adminGetAllBasicDetails = async()=>{
    try{
        const config: AxiosRequestConfig = {
            url: configKeys.API_URL+apiConfig.ADMIN_GET_BASIC_DETAILS_USER_Employer_PACKAGE,
            method: 'get'
        }
        const response = await api(config)
        return response?.data.result
    }catch(err:any){
      if(err.message === 'Request failed with status code 404'){
        throw new Error('data not found!')
      }else{
        throw new Error('something went wrong!')
      }
    }
}
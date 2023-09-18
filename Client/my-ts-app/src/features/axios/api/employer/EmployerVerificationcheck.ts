import {AxiosRequestConfig} from "axios";
import apiConfig from "../../../../utils/apiConfig";
import configKeys from "../../../../utils/config";
import setupAxiosInterceptorsEmployer from "../../intercepters/axiosInterceptorEmployer";

const api = setupAxiosInterceptorsEmployer()

export const EmployerVerificationCheck= async (): Promise<any>=>{

    try{
        const config: AxiosRequestConfig = {
            url: apiConfig.Employer_Verification_check,
            method: 'get'
        }
        const response = await api(config)
        console.log(response,"response");
        
        return response?.data
    }catch(err:any){
        throw new Error('something went wrong!')
    }
}







// const createNewJob = async (
//     payload: JobCreationPayload,
//   ): Promise<any> => {
//     try {
//       const config: AxiosRequestConfig = {
//         url: apiConfig.createNewJob,
//         method: "post",
//         data: payload
//       };
//       const response = await api(config);
//       return response.data;
//     } catch (error) {
//       throw new Error("error while creating new job");
//     }
//   };
  
//   export default createNewJob;
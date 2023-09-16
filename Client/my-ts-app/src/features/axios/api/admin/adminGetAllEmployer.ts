import { AxiosRequestConfig } from "axios";
import apiConfig from "../../../../utils/apiConfig";
import configKeys from "../../../../utils/config";
import adminSetupAxiosInterceptors from "../../intercepters/adminAxiosInterceptor";
const api = adminSetupAxiosInterceptors();
export const getEmployers = async () => {
  try {
    const config: AxiosRequestConfig = {
      url: configKeys.API_URL + apiConfig.ADMIN_GET_ALL_EMPLOYERS,
      method: "get",
    };
    const response = await api(config);
    console.log(response,"employer details");
    
    return response?.data;
  } catch (error: any) {
    if (error.message === "Request failed with status code 304") {
      throw new Error("No agents found!");
    } else {
      throw new Error("Fetching agents failed!");
    }
  }
};
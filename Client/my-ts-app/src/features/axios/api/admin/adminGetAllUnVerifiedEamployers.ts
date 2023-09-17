import { AxiosRequestConfig } from "axios";
import configKeys from "../../../../utils/config";
import apiConfig from "../../../../utils/apiConfig";
import adminSetupAxiosInterceptors from "../../intercepters/adminAxiosInterceptor";

const api = adminSetupAxiosInterceptors();
export const adminUnVerifedEmployers = async () => {
  try {
    const config: AxiosRequestConfig = {
      url: configKeys.API_URL + apiConfig.ADMIN_GET_ALL_UNVERIFIED_EMPLOYERS,
      method: "get",
    };
    const response = await api(config);
    return response?.data;
  } catch (error: any) {
    if (error.message === "Request failed with status code 404") {
      throw new Error("No agents found!");
    } else {
      throw new Error("Fetching unVerified agents failed !");
    }
  }
};
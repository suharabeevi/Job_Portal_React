import { AxiosRequestConfig } from "axios";
import configKeys from "../../../../utils/config";
import apiConfig from "../../../../utils/apiConfig";
import adminSetupAxiosInterceptors from "../../intercepters/adminAxiosInterceptor";

const api = adminSetupAxiosInterceptors();
export const BlockEmployer = async (EmployerId: any) => {
  try {
    const config: AxiosRequestConfig = {
      url: configKeys.API_URL + apiConfig.ADMIN_BLOCK_EMPLOYER+ EmployerId,
      method: "post",
    };
    const response = await api(config);
    return response?.data;
  } catch (error: any) {
    if (error.message === "Request failed with status code 304") {
      throw new Error("OPeraction failed, Try again!");
    } else {
      throw new Error("something went wrong , try again!");
    }
  }
};
import { AxiosRequestConfig } from "axios";
import apiConfig from "../../../../utils/apiConfig";
import configKeys from "../../../../utils/config";
import adminSetupAxiosInterceptors from "../../intercepters/adminAxiosInterceptor";
const api = adminSetupAxiosInterceptors();

export const BlockUser = async (userId: any) => {
  try {
    const config: AxiosRequestConfig = {
      url: configKeys.API_URL + apiConfig.ADMIN_BLOCK_USER + userId,
      method: "post",
    };

    const response = await api(config);
    return response?.data;
  } catch (error: any) {
    if (error.message === "Request failed with status code 304") {
      throw new Error("Operation failed, Try again!");
    } else {
      throw new Error("something went wrong, try again!");
    }
  }
};
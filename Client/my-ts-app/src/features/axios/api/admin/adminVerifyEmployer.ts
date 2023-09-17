import { AxiosRequestConfig } from "axios";
import configKeys from "../../../../utils/config";
import apiConfig from "../../../../utils/apiConfig";
import adminSetupAxiosInterceptors from "../../intercepters/adminAxiosInterceptor";

//todo change the intterface into separate file of folder

const api = adminSetupAxiosInterceptors();
export const verifyEmployer = async (EmployerId: any) => {
  try {
    const config: AxiosRequestConfig = {
      url: configKeys.API_URL + apiConfig.ADMIN_VERIFY_EMPLOYER+ EmployerId,
      method: "post",
    };
    const response = await api(config);
    return response?.data;
  } catch (error: any) {
    if (error.message === "Request failed with status code 304") {
      throw new Error("Operation failed, Try again!");
    } else {
      throw new Error("Something went wrong, try again!");
    }
  }
};
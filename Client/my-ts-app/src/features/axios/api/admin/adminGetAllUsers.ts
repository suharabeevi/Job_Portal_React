import { AxiosRequestConfig } from "axios";
import apiConfig from "../../../../utils/apiConfig";
import adminSetupAxiosInterceptors from "../../intercepters/adminAxiosInterceptor";
//? admin get all users

const api = adminSetupAxiosInterceptors();
export const getUsers = async () => {
  try {
    const config: AxiosRequestConfig = {
      url: apiConfig.ADMIN_GET_ALL_USERS,
      method: "get",
    };
    const response = await api(config);
    console.log(response,"yesssss");
    return response?.data;
  } catch (error: any) {
    if (error.message === "Request failed with status code 404") {
      throw new Error("No users found!");
    } else {
      throw new Error("Fectching user details failed!");
    }
  }
};
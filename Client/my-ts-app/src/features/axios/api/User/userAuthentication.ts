import axios, { AxiosRequestConfig } from "axios";

import { LoginPayload, SignupPayload, } from "../../../../types/PayloadInterface";
import apiConfig from "../../../../utils/apiConfig";
export const registerUser = async (payload: SignupPayload): Promise<any> => {
    try {
      const config: AxiosRequestConfig = {
        url: `${apiConfig.userRegister}`,
        method: "post",
        data: payload,
      };
      const response = await axios(config);
      return response.data;
    } catch (error: any) {
      if (error.message === "Request failed with status code 409") {
        throw new Error("Email already exists !!!");
      } else {
        throw new Error("Signup failed, try again");
      }
    }
  };
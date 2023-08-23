import { GoogleAuthService } from "../../framework/services/googleAuthService";
export const googleAuthServiceInterface = (
  service: ReturnType<GoogleAuthService>
) => {
  const verify = async (token: string) => await service.verify(token);

  return {
    verify,
  };
};

export type GoogleAuthServiceInterface = typeof googleAuthServiceInterface;
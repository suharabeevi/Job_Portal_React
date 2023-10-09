import { HttpStatus } from "../../../types/httpStatus";
import { CreateUserInterface } from "../../../types/userInterface";
import { UserDbInterface } from "../../repositories/userDbRepository";
import { AuthServiceInterface } from "../../services/authServiceInterface";
import { GoogleAuthServiceInterface } from "../../services/googleAuthServiceInterface";
import AppError from "../../../utils/appError";
import { UserEntity } from "../../../entities/UserEntity";
import { EmailServiceInterface } from "../../services/emailServiceInterface";
// creating a new user
export const registerUser = async (
  user: CreateUserInterface,
  userRepository: ReturnType<UserDbInterface>,
  authService: ReturnType<AuthServiceInterface>
) => {
  user.email = user.email.toLowerCase();
  const isExistingEmail = await userRepository.getUserByEmail(user.email);
  if (isExistingEmail) {
    throw new AppError("email already exists", HttpStatus.CONFLICT);
  }
  user.password = await authService.encryptPassword(user.password ?? "");
  const result = await userRepository.createUser(user);
  return result;
};

// user login
export const userLogin = async (
  email: string,
  password: string,
  userRepository: ReturnType<UserDbInterface>,
  authService: ReturnType<AuthServiceInterface>
) => {
  const user   = await userRepository.getUserByEmail(email);
  if (!user) {
    throw new AppError("this user does not exist", HttpStatus.UNAUTHORIZED);
  }
  if (user.isGoogleUser) {
    throw new AppError("this user is unauthorized", HttpStatus.UNAUTHORIZED);
  }
  const isPasswordCorrect = await authService.comparePassword(
    password,
    user.password ?? ""
  );
  if (!isPasswordCorrect) {
    throw new AppError("Sorry, incorrect password", HttpStatus.UNAUTHORIZED);
  }
  const payload = user._id ? user._id.toString() : '';
  const token = authService.generateToken(payload, 'user');
  return token;
};

// login with google
export const signInWithGoogle = async (
  credential: string,
  googleAuthService: ReturnType<GoogleAuthServiceInterface>,
  userRepository: ReturnType<UserDbInterface>,
  authService: ReturnType<AuthServiceInterface>
) => {
  const user = await googleAuthService.verify(credential);
  const isUserExist = await userRepository.getUserByEmail(user.email);
  if (isUserExist) {
    const payload = isUserExist?._id?.toString();
    const token = authService.generateToken(payload ?? '', 'user');
    return token;
  } else {
    const { _id: userId} = await userRepository.createUser(user);
    const payload = userId?.toString();
    const token = authService.generateToken(payload ?? '', 'user');
    return token;
  }
};
export const userPasswordUpdateUseCase = async(
  userId: string,
  eitedPassword: any,
  userRepository: ReturnType<UserDbInterface>,
  authService: ReturnType<AuthServiceInterface>
)=>{
  const userData = await userRepository.getUserDataById(userId)
  console.log(userData);
  
  const userDbPassword = userData?.password

  const isPasswordCorrect = await authService.comparePassword(
    eitedPassword,
    userDbPassword ?? ""
  );
  console.log(isPasswordCorrect);
  
  if (!isPasswordCorrect) {
    throw new AppError(
      "sorry, your password was incorrect.Please double-check your password",
      HttpStatus.UNAUTHORIZED
    )}
  const newPassword = await authService.encryptPassword(eitedPassword.newPassword);
  const obj={
    password: newPassword
  }

  const result = await userRepository.userPasswordUpdate(userId,obj);
  console.log(result);
  
  return result;

}
export const updatePasswordWithEmailUseCase = async(
  emailId:string,
  eitedPassword:any,
  userRepository:ReturnType<UserDbInterface>,
  authService:ReturnType<AuthServiceInterface>
)=>{
  const newPassword = await authService.encryptPassword(eitedPassword.newPassword);
  const obj={
    password:newPassword
  }
  const email = emailId.toString()
  
  const result = await userRepository.userPasswordUpdatewithEmail(email,obj)
  return result
}
export const generateOTPUseCase = async(
  userEmail: string,
  userDbRepository: ReturnType<UserDbInterface>,
  sendMailService: ReturnType<EmailServiceInterface>
)=>{
  const isExistingEmail = await userDbRepository.getUserByEmail(userEmail);
  if(!isExistingEmail){
    throw new AppError(`could not find user in this email`,HttpStatus.UNAUTHORIZED)
  }
//call the generate otp function to the userEmail
  sendMailService.sendOtpEmail(userEmail)
  return isExistingEmail
}

export const verifiyOTPUseCase = async(
  userOTP:string,
  sendMailService: ReturnType<EmailServiceInterface>
)=>{
  const response = sendMailService.verifyOTP(userOTP)
  if(response.message === 'OTP verified'){
    return true
  }else if( response.message === 'OTP is expired'){
    throw new AppError('OTP is expired!',HttpStatus.NOT_ACCEPTABLE)
  }else{
    throw new AppError('OTP is Invalid!',HttpStatus.UNAUTHORIZED)
  }
}
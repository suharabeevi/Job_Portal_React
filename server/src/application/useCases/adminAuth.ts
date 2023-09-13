import { HttpStatus } from "../../types/httpStatus";
import { AdminInterface } from "../../types/admin";
import AppError from "../../utils/appError";
import { AuthServiceInterface } from "../services/authServiceInterface";
import { AdminDbInterface,adminDbRepository } from "../repositories/adminDbRepository";
import { ObjectId, Types } from "mongoose";
import { log } from "console";

export const adminLoginUseCase = async (
    email: string,
    password: string,
    adminRepository: ReturnType<AdminDbInterface>,
    authService: ReturnType<AuthServiceInterface>
  ) => {
    const admin: AdminInterface | null = await adminRepository.getAdminByEmail(
      email
    );
    if (!admin) {
      throw new AppError("There is no admin in this email", HttpStatus.NOT_FOUND);
    }
    const isPasswordCorrect = await authService.comparePassword(
      password,
      admin?.password ?? ""
    );
    console.log(isPasswordCorrect,"passwordiscorrect");
    
    if (!isPasswordCorrect) {
      throw new AppError(
        "sorry , your password was incorrect.Please double-check your password",
        HttpStatus.UNAUTHORIZED
      );
    }
   const payload = admin._id ? admin._id.toString() : '';
  
    const token = authService.generateToken(payload,'admin');
    return token;
  };

  export const adminGetAllUsersUseCase = async (
    adminRepository: ReturnType<AdminDbInterface>
  ) => {
    const userData = await adminRepository.getAllUsers();
    if (!userData) {
      throw new AppError("No users found", HttpStatus.NOT_FOUND);
    }
    return userData;
  };
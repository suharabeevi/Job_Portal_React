import { CreateUserInterface, UserInterface } from "../../../../types/userInterface";
import { UserEntity } from "../../../../entities/UserEntity";
import {UserModel} from "../models/userModel";
import { User } from "../models/userModel";
import { Types } from "mongoose";

export const UserRepositoryMongoDB = (model: UserModel) => {
    const userEntity = new UserEntity(model);
  
    // getting the registered user by the email id
    const getUserByEmail = async (email: string) => {
      const user = await userEntity.getUserByEmail(email);
      return user;
    };
  
    // adding a new user
    const createUser = async (user: CreateUserInterface)=> {
      const newUser = await userEntity.creteUser(user);
      return newUser;
    }
  
    const getUserDataById = async (id: string) => {
      const userData = await userEntity.getUserDataById(id);
      return userData;
    }
    const updateUser = async (userId: string, updates: Partial<UserInterface>) => {
      const updatedUser = await userEntity.updateUser(userId, updates);
      return updatedUser;
    }
    const deleteResume = async (userId: string) => { 
      await userEntity.resumeDelete(userId);
    }
    const userPasswordUpdate = async(
      userId:string,
      editedPassword: any
    )=>{
      const id = new Types.ObjectId(userId);
      try{
        const updatedPassword = await User.findByIdAndUpdate(id,{$set: editedPassword},{new:true})
        return true
      }catch(error){
        console.log(error);
        throw error;
      }
    }
    const userPasswordUpdatewithEmail = async(
      email: string,
      editedPassword:any
    )=>{
      console.log(email)
      try{
        const updatedPassword = await User.findOneAndUpdate({email},{$set: editedPassword},{new:true})
        return true
      }catch(error){
        console.log(error);
        throw error;
      }
    }
  
    return {
        getUserByEmail,
        createUser,
        getUserDataById,
        updateUser,
        deleteResume,
        userPasswordUpdate,
        userPasswordUpdatewithEmail
      };
    };
    export type UserRepositoryMongoDB = typeof UserRepositoryMongoDB;
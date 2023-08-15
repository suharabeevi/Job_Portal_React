import mongoose from "mongoose";
import configKeys from "../../../config";
import { log } from "console";

const connectDB = async () => {
  try {
    const dbOptions = {
      dbName: configKeys.DB_NAME, 
    };
    await mongoose.connect("mongodb+srv://sairasuhara12345:s6AYGWiUUv7voyEK@cluster0.rzzuwuk.mongodb.net/", dbOptions);
    console.log(dbOptions);
 
    console.log("Database connected...");
  } catch (error) {
    console.error("Database connection error", error);
    // Exiting the process or handle the error later
    process.exit(1);
  }
};

export default connectDB;
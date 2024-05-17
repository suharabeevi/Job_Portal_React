import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";


const expressConfig = (app: Application) => {
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: ["http://localhost:3000"],
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  
};

export default expressConfig;

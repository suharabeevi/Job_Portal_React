import dotenv from "dotenv";
dotenv.config();
const configKeys = {
    JWT_KEY: process.env.JWT_SECRET as string,
    MONGO_DB_URL: process.env.DATABASE as string,
    DB_NAME: process.env.DB_NAME as string,
    PORT: process.env.PORT,
    GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID as string,
    NODE_MAIL_USER: process.env.NODE_MAIL_USER_EMAIL as string,
    NODE_MAIL_PASS: process.env.EMAIL_PASS as string,
};
export default configKeys;
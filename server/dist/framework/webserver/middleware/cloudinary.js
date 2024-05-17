"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploads = exports.upload = void 0;
const cloudinary_1 = require("cloudinary");
const multer_1 = __importDefault(require("multer"));
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
const storageOptions = {
    cloudinary: cloudinary_1.v2,
    params: {
        resource_type: 'auto',
        folder: 'job_portal',
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp', 'svg', 'pdf'],
        public_id: (req, file) => {
            const fileName = file.originalname.split('.').slice(0, -1).join('.');
            return fileName;
        }
    }
};
const storage = new multer_storage_cloudinary_1.CloudinaryStorage(storageOptions);
const upload = (0, multer_1.default)({ storage: storage }).single('image');
exports.upload = upload;
const uploads = (0, multer_1.default)({ storage: storage }).single('idProof_img');
exports.uploads = uploads;

import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import multer from 'multer';
import { Request, RequestHandler } from 'express';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

interface CloudinaryStorageOptions {
  cloudinary: any; // Adjust the type as needed for the cloudinary object
  params: {
    folder: string;
    resource_type: string;
    allowed_formats: string[];
    public_id: (req: Request, file: Express.Multer.File) => string;
  };
}
// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Multer configuration
const storageOptions: CloudinaryStorageOptions = {
  cloudinary: cloudinary,
  params: {
    resource_type: 'auto',
    folder: 'job_portal',
    allowed_formats: ['jpg', 'jpeg', 'png','webp','svg','pdf'],
    public_id: (req: Request, file: Express.Multer.File): string => {
      const fileName = file.originalname.split('.').slice(0, -1).join('.');
      return fileName;
    }
  }
};
const storage = new CloudinaryStorage(storageOptions);
const upload: RequestHandler = multer({ storage: storage }).single('image');
const uploads: RequestHandler = multer({ storage: storage }).single('idProof_img');
export { upload,uploads };


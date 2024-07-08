import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'profileAvatar',
    allowedFormats: ['jpeg', 'jpg', 'png', 'heic', 'heif', 'webp', 'avif'],
  },
});

const upload = multer({ storage });

export default upload;

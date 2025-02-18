import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";

import { MESSAGES } from "../constants/messages.js";

dotenv.config();

const uploadImage = async (req, res) => {
  try {
    cloudinary.config({ 
      cloud_name: process.env.CLOUDINARY_API_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    
    if (!req.file) {
      return res.status(400).json({ errros: [{ message: MESSAGES.IMAGE_NO_UPDATED }]});
    }

    //? upload image on cloudinary.
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
			folder: "tekkar",
		});
      
    //? optimize delivery by resizing and applying auto-format and auto-quality.
    cloudinary.url(uploadResult.public_id, {
      fetch_format: "auto",
      quality: "auto"
    });
    
    //? transform the image: auto-crop to square aspect_ratio.
    cloudinary.url(uploadResult.public_id, {
      crop: "auto",
      gravity: "auto",
      width: 1200,
      height: 1200,
    });
    
    //? deletes the temporarily stored image.
    fs.unlinkSync(req.file.path);

    return res.status(200).json({ url: uploadResult.secure_url });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

export const imageController = {
	uploadImage,
};
import express from "express";
import multer from "multer";

import { imageController } from "../controllers/image.controller.js";

import { authTokenMiddleware } from "../middlewares/userMiddleware.js";

const router = express.Router();

//? multer configuration for handling temporary files.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

//? CRUD endpoints.
router.post("/upload", authTokenMiddleware, upload.single("image"), imageController.uploadImage);

export default router;
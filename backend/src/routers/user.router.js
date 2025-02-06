import express from "express";
import multer from "multer";

import { userController } from "../controllers/user.controller.js";

import { updateImageMiddleware } from "../middlewares/imageMiddleware.js";
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

//? session endpoints.
router.post("/authentication", userController.authentication);
router.post("/login", userController.login);
router.post("/logout", authTokenMiddleware, userController.logout);

//? CRUD endpoints.
router.get("/", authTokenMiddleware, userController.getPage);
router.get("/:id", authTokenMiddleware, userController.getOne);
router.post("/", authTokenMiddleware, userController.create);

router.put("/:id/profile_image", authTokenMiddleware, upload.single("image"), updateImageMiddleware, userController.updateProfileImage);
router.put("/:id", authTokenMiddleware, userController.update);

export default router;
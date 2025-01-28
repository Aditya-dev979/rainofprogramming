import express from "express";
import { getUserProfile, login, logout, register, updateProfile } from "../controllers/user.controller.js";
import upload from "../utils/multer.js";
import isAuthenticated from "../midlleweres/isAuthenticated.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", isAuthenticated, getUserProfile);
router.get("/logout", logout);
router.put("/profile/update", isAuthenticated, upload.single("profilePhoto"), updateProfile);



export default router;

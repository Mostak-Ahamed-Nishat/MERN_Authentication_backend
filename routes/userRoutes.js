import express from "express";
const router = express.Router();

import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", registerUser);
router.post("/logout", logoutUser);
router.post("/auth", authUser);
// router.route("/profile").get(getUserProfile).put(updateUserProfile);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;

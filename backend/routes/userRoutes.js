import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUserById,
  forgotPassword,
  updatePassword,
  resetPassword,
} from "../controllers/userController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/updatePassword").put(protect, updatePassword);

router.route("/").post(registerUser).get(protect, admin, getUsers);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUserById);

router.route("/forgotPassword").post(forgotPassword);

router.route("/resetPassword/:resetToken").put(resetPassword);

export default router;

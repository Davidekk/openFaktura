import express from "express";
import { Register, Login } from "../controller/authController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);

export default router;

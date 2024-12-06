import express from "express";
import { login, register, logout } from "../controllers/auth.js";

const router = express.Router();

//(importing the controller post function from controllers :)
router.get("/register", register);
router.get("/login", login);
router.get("/logout", logout);
//routes:

export default router;

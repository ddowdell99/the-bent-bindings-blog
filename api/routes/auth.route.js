import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

// .post is used to create
router.post("/signup", signup);

export default router;

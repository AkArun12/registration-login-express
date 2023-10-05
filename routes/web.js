import express from "express";
import UserController from "../controllers/userController.js";

const router=express.Router()

router.get('/',UserController.home)

export default router;
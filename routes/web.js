import express from "express";
import UserController from "../controllers/userController.js";

const router=express.Router()

router.get('/',UserController.home)
router.get('/login',UserController.login)
router.get('/registration',UserController.registration)

export default router;
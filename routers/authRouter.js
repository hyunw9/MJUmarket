import { Router } from "express";
import authController from "../controller/authController.js";

const router = Router();

//router.post("/login", auth.login);
router.post("/register", authController.register);

router.post("/register/mail", authController.mail);
router.post("/login", authController.login);
//router.post("/mailAuth", body("key").exist(), authController.mailAuth);
export default router;
//added

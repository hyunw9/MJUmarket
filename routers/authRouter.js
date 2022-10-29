import { Router } from "express";
import authController from "../controller/authController.js";
import postController from "../controller/postController.js";
const router = Router();

//router.post("/login", auth.login);
router.post("/register", authController.register);

router.post("/register/mail", authController.mail);
router.post("/login", authController.login, postController.get);
//router.post("/mailAuth", body("key").exist(), authController.mailAuth);
export default router;
//added

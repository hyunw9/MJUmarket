import { Router } from "express";
import authController from "../controller/authController.js";
//import validate from "../middlewares/param.validate.js";
const router = Router();

//router.post("/login", auth.login);
router.post("/register", authController.register);

router.post("/register/mail", authController.mail);

//router.post("/mailAuth", body("key").exist(), authController.mailAuth);
export default router;

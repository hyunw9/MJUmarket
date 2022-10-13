import { Router } from "express";
import authController from "../controller/authController";
import validate from "../middlewares/param.validate";
const router = Router();

//router.post("/login", auth.login);
//router.post("/register", auth.login);
router.post("/mail", authController.mail);
router.post("/mailAuth", authController.mailAuth);
export default router;

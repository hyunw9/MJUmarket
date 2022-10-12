import { Router } from "express";
import validate from "../middlewares/param.validate";
const router = Router();

router.post("/login", auth.login);
router.post("/register", auth.login);
export default router;

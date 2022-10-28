import { Router } from "express";
import auth from "../controller/userController.js";
import postController from "../controller/postController";
const router = Router();

//router.get("/list", post);
router.post("/article", postController.post);
router.get("/", postController.get);
export default router;

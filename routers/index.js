import { Router } from "express";
import authRouter from "./authRouter.js";
import postRouter from "./postRouter.js";

const router = Router();
router.use("/user", authRouter);
router.use("/post", postRouter);
router.use("/auth", authRouter);
export default router;

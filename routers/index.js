import { Router } from "express";
import authRouter from "./authRouter";
import postRouter from "./postRouter";

const router = Router();
router.use("/user", authRouter);
router.use("/post", postRouter);
router.use("/auth", authRouter);
module.exports = router;

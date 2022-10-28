import { Router } from "express";
import authRouter from "./authRouter.js";
import postRouter from "./postRouter.js";

const router = Router();
router.use("/user", authRouter);
router.use("/post", postRouter);
router.use("/auth", authRouter);
router.use("/", async (req, res) => {
  res.send("Hello");
});
export default router;

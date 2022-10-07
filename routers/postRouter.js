import { Router } from "express";
import auth from "../controller/userController";
const router = Router();
router.get("/register", async (req, res) => {
  return res.json({
    name: "kim cheol joung",
  });
});
//router.post("/login", auth.login);
export default router;

import { Router } from "express";
import validate from "../middlewares/param.validate";
const router = Router();

router.get("/", (req, res) => {
  print("Hello");
});
export default router;

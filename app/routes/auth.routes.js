import { signup, signin } from "../controllers/auth.controller.js";
import verifySignUp from "../middlewares/verifySignUp.js";
import { Router } from "express";

const router = Router();

router.post("/signup", verifySignUp.checkDuplicateUsernameOrEmail, signup);
router.post("/signin", signin);

export default router;

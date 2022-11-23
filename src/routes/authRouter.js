import { Router } from "express";
import {signUp} from "../controllers/authController.js";
import {validatingSignUp} from "../middlewares/authMiddleware.js";

const authRouter = Router();
authRouter.post("/sign-up", validatingSignUp, signUp);

export default authRouter;
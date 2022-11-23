import { Router } from "express";
import {signUp, signIn} from "../controllers/authController.js";
import {validatingSignUp, validatingSignIn} from "../middlewares/authMiddleware.js";

const authRouter = Router();
authRouter.post("/sign-up", validatingSignUp, signUp);
authRouter.post("/", validatingSignIn, signIn);

export default authRouter;
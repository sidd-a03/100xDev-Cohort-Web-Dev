import { Router } from 'express'
import {signInController, signUpController} from "../controllers/auth.controller";
import zodValidateMiddleware from "../middlewares/zod-validate.middleware";
import {authSchema} from "../schemas/zod.schema";

const userRouter = Router();

userRouter.post('/signup', zodValidateMiddleware(authSchema), signUpController);

userRouter.put('/signin', zodValidateMiddleware(authSchema),signInController)

export default userRouter;

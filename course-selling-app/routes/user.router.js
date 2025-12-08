import { Router } from 'express';
import validateMiddleware from "../middlewares/validate.middleware.js";
import {signInSchema, signUpSchema} from "../schemas/common.schema.js";
import {signInController, signUpController} from "../controllers/auth.controller.js";

const userRouter = Router();

userRouter.post('/signup', validateMiddleware(signUpSchema), signUpController);

userRouter.post('/signin', validateMiddleware(signInSchema), signInController);

userRouter.get('/courses', (req, res) => {
    res.json({
        message: 'User courses endpoint'
    })
});

export default userRouter;
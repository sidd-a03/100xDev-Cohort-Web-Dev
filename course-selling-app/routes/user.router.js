import { Router } from 'express';
import validateMiddleware from "../middlewares/validate.middleware.js";
import {signUpSchema} from "../schemas/common.schema.js";
import {signUpController} from "../controllers/auth.controller.js";

const userRouter = Router();

userRouter.post('/signup', validateMiddleware(signUpSchema), signUpController);

userRouter.post('/signin', (req, res) => {
    res.json({
        message: 'Signin endpoint'
    })
});

userRouter.get('/courses', (req, res) => {
    res.json({
        message: 'User courses endpoint'
    })
});

export default userRouter;
import { Router } from 'express';

const userRouter = Router();

userRouter.post('/signup', (req, res) => {
    res.json({
        message: 'Signup endpoint'
    })
});

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
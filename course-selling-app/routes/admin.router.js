import { Router } from 'express';

const adminRouter = Router();

adminRouter.post('/signup', (req, res) => {
    res.json({
        message: 'Signup endpoint'
    })
});

adminRouter.post('/signin', (req, res) => {
    res.json({
        message: 'Signin endpoint'
    })
});

adminRouter.post('/courses', (req, res) => {
    res.json({
        message: 'Admin courses endpoint'
    })
});

adminRouter.put('/courses', (req, res) => {
    res.json({
        message: 'Admin courses endpoint'
    })
});

adminRouter.get('/courses', (req, res) => {
    res.json({
        message: 'Admin courses endpoint'
    })
});

export default adminRouter;
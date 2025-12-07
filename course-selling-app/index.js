import express from 'express';
import userRouter from "./routes/user.router.js";
import courseRouter from "./routes/course.router.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/v1/user', userRouter);

app.use('/api/v1/course', courseRouter);

app.listen(PORT, () => {
    console.log(`Subscription tracker is running on http://localhost:${PORT}`);
})
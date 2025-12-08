import express from 'express';
import userRouter from "./routes/user.router.js";
import courseRouter from "./routes/course.router.js";
import adminRouter from "./routes/admin.router.js";
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/db.js";

const app = express();

app.use(express.json());

app.use('/api/v1/user', userRouter);

app.use('/api/v1/course', courseRouter);

app.use('/api/v1/admin', adminRouter)

app.listen(PORT, async () => {
    console.log(`Subscription tracker is running on http://localhost:${PORT}`);

    await connectToDatabase();
})
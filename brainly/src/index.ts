import express from "express";
import cors from "cors";
import router from "./routes";
import {PORT} from "./config/env";
import connectToDatabase from "./database/db";

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

app.listen(PORT, async (): Promise<void> => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await connectToDatabase();
})
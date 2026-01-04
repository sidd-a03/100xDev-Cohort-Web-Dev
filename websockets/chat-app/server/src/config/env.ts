import { config } from "dotenv";

config({ path: ".env" });

export const {
    NODE_ENV,
    WS_PORT,
} = process.env;




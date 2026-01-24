import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
    DATABASE_URL: z.url({message: "DATABASE_URL must be a valid URL"}).nonempty({ message: "DATABASE_URL cannot be empty" })
})

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
    console.error( "Invalid environment variables" );
    const pretty = z.prettifyError(_env.error);
    console.error( pretty );
    throw new Error('Invalid environment variables setup');
}

export const env = _env.data;

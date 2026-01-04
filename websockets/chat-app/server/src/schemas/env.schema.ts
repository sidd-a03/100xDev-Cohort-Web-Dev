import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z.literal(['development', 'test', 'production']).default('development'),
    WS_PORT: z.coerce.number(),
})

export type envType = z.infer<typeof envSchema>

const result = envSchema.safeParse(process.env);

if (!result.success){
    console.error( z.flattenError(result.error).fieldErrors);
    throw new Error("Invalid environment variable");
}

const env: envType = result.data;

export default env

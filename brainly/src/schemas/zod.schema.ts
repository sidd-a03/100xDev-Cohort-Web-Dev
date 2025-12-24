import { z } from "zod";

export const authSchema = z.object({
    username: z.union([
        z.string().min(3, "Username must be at least 3 characters long").regex(
            /^[a-z._-]+$/,
            "Username can only contain alphabets, '.', '-', '_'"
        ),
        z.email()
    ]),
    password: z.string().min(6, "Password must be at least 6 characters long"),
})

export type authBody = z.infer<typeof authSchema>;
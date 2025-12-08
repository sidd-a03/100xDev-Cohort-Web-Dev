import { z } from 'zod'

export const signUpSchema = z.object({
    username: z.union([
        z.email(),
        z.string().regex(
            /^[A-Za-z._-]+$/,
            "Username can only contain alphabets, '.', '-', '_'"
        ).trim().toLowerCase()
    ]),
    password: z.string(),
    name: z.string().min(3).max(100)
});
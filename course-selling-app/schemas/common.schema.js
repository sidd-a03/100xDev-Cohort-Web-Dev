import { z } from 'zod'

export const signUpSchema = z.object({
    username: z.union([
        z.email(),
        z.string().regex(
            /^[a-z._-]+$/,
            "Username can only contain alphabets, '.', '-', '_'"
        )
    ]).transform(value => value.trim().toLowerCase()),
    password: z.string(),
    name: z.string().min(3).max(100)
});

export const signInSchema = z.object({
    username: z.union([
        z.email(),
        z.string().regex(
            /^[a-z._-]+$/,
            "Username can only contain alphabets, '.', '-', '_'"
        )
    ]).transform(value => value.trim().toLowerCase()),
    password: z.string(),
})
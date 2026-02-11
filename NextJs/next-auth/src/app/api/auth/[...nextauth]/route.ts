import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Login with email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jhondoe@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const username = credentials?.username;
                const password = credentials?.password;

                const user = { id: "1", username: "J Smith", email: "jsmith@example.com" }

                if (user) return user;
                else return null;
            }
        }),
        GoogleProvider({
            clientId: "asdf",
            clientSecret: "asdf"
        }),
        GithubProvider({
            clientId: "jhg",
            clientSecret: "jhgh"
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
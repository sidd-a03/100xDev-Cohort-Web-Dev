import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const POST = async (req: NextRequest, res: NextResponse) => {
    const data = await req.json();

    await prisma.user.create({
        data: {
            username: data.username,
            password: data.password,
        }
    })
    return NextResponse.json({
        message: "You have been signed up"
    })
}
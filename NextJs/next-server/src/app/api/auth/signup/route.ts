import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
    const data = await req.json();
    console.log(data);
    return NextResponse.json({
        message: "You have been signed up"
    })
}
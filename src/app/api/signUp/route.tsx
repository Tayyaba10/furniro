
import usersInfo from "@/data/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    try{
        const body = await request.json()
        const {email} = body

        const existingUser = usersInfo.find(user=>user.email==email)

        if(existingUser)
            return NextResponse.json({status:false,message:"user already exist"},{status:409})

        usersInfo.push(body)
        const currentUser = usersInfo.find(user=>user.email==email)
        return NextResponse.json({status:true,message:"signup successfully",user:{email:currentUser?.email, id:currentUser?.id, name:currentUser?.name}},{status:200})
    }
    catch(error)
    {
        console.error("Error processing request:", error);
        if (error instanceof Error) {
            return NextResponse.json({status:false, message: error.message}, { status: 500 });
        } else {
            return NextResponse.json({status:false, message: "An unknown error occurred"}, { status: 500 });
        }
    }
}

import usersInfo from "@/data/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    try{
        const body = await request.json()
        const {email,password} = body

        const existingUser = usersInfo.find((user)=>user.email==email)

        if(!existingUser)
            return NextResponse.json({status:false, message:"account not found for "+email},{status:404})

        if(existingUser.password!==password)
            return NextResponse.json({status:false, message:"invalid password for "+email},{status:404})
        
        return NextResponse.json({status:true,message:"login successfully", user:{email:existingUser.email, id:existingUser.id, name:existingUser.name}},{status:200})
        
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
import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export const POST = async (req: Request) => {

    try {

      const user:CreateUserDto = await req.json();
   
     if(!user){
        return null;
     }

  //Check if user is already is in database
    const loggedInUser = await db.user.findUnique({
        where: {
        clerkUserId: user.clerkUserId,
        },
    });


    if (loggedInUser) {
        return NextResponse.json({message:'Already logged in',data: loggedInUser});
    }

     // //create user if doens't exist
    const newUser = await db.user.create({
        data: {
        clerkUserId: user.clerkUserId,
        email: user?.email,
        name: user.name,
        imageUrl: user.imageUrl,
        },
    });

    return NextResponse.json({ message: 'Success', data: newUser });
        

    } catch (error) {
      return NextResponse.json({ error: 'Failed to parse body' }, { status: 400 });
    }

};
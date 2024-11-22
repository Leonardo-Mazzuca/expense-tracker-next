'use client'
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";


export const useCheckUser = () => {

    const {user,isLoaded} = useUser();

    if(!isLoaded){
      return null
    }
  
    useEffect(()=> {
      const checkUser = async () => {
  
          if(user){
  
              const body:CreateUserDto = {
                  clerkUserId: user.id,
                  email: user.emailAddresses[0].emailAddress,
                  name: user.fullName || "",
                  imageUrl: user.imageUrl
              }
  
              const req = await fetch('/api/user',{
                  method:'POST',
                  body: JSON.stringify(body),
                  headers: {
                      'Content-Type': 'application/json',
                    },
              })

            //   const res = await req.json();
            //   console.log(res);
              
  
  
          }
  
      }
  
      checkUser();
  
    },[user])

}
'use client'

import getUserBalance from '@/app/actions/get-user-balance';
import { addCommas } from '@/lib/utils';
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

const Balance = () => {


    const {user,isLoaded} = useUser();

    if(!isLoaded || !user){
        return null
    }

    const [balance, setBalance] = useState(0)

    useEffect(()=> {

        const fetchBalance = async () => {
            const {balance} = await getUserBalance(user.id)

            if(balance) setBalance(balance)

        }

        fetchBalance()

    },[])

  return (
    
    <>
    
        <h4>
            Your balance
        </h4>
        <h1>
            ${addCommas(balance) ?? 0}
        </h1>
        
    </>

  )

}

export default Balance
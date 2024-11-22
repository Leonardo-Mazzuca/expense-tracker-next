
'use client'

import getIncomeExpenses from '@/app/actions/get-income-expenses'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

const IncomeExpense = () => {

    
    const [balance, setBalance] = useState({
        income: 0,
        expense: 0
    })

    const {user,isLoaded} = useUser();


    useEffect(()=> {

        const fetchBalance = async () => {
            
            if(user) {
                const balance= await getIncomeExpenses(user?.id)
                setBalance({
                    income: balance.income || 0,
                    expense: balance.expense || 0
                })
            }


        }

        fetchBalance()
    },[user])

    if(!user || !isLoaded){
        return null;
    }

  return (

    <div className='inc-exp-container'>
        <div>
            <h4>
                Income
            </h4>
            <p className='money plus'>
                ${balance.income}
            </p>
        </div>
        <div>
            <h4>
                Expense
            </h4>
            <p className='money minus'>
                ${balance.expense}
            </p>
        </div>
    </div>

  )
}

export default IncomeExpense
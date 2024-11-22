

import getIncomeExpenses from '@/app/actions/get-income-expenses'
import { addCommas } from '@/lib/utils'
import React from 'react'

const IncomeExpense = async () => {

    
    const {expense,income} = await getIncomeExpenses();

  return (

    <div className='inc-exp-container'>
        <div>
            <h4>
                Income
            </h4>
            <p className='money plus'>
                ${addCommas(Number(income?.toFixed(2)))}
            </p>
        </div>
        <div>
            <h4>
                Expense
            </h4>
            <p className='money minus'>
                ${addCommas(Number(expense?.toFixed(2)))}
            </p>
        </div>
    </div>

  )
}

export default IncomeExpense
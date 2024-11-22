



'use server'
import { db } from "@/lib/db"

async function getIncomeExpenses(userId: string):Promise<{
    income?:number,
    expense?:number
    error?:string
}>{

    try {

        const transactions = await db.transaction.findMany({where:{userId}})
        
        const amounts = transactions.map(t => t.amount)
        const income = amounts.filter((item)=> item>0).reduce((acc,item) => acc + item,0)
        const expense = amounts.filter((item)=> item<0).reduce((acc,item) => acc + item,0)
        
        return {income,expense: Math.abs(expense)}
        
    } catch (error) {
        return {error: 'Database error'}
    }

}

export default getIncomeExpenses
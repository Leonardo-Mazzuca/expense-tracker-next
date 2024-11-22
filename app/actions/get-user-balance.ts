'use server'
import { db } from "@/lib/db"

async function getUserBalance(userId: string):Promise<{
    balance?:number,
    error?:string
}>{

    try {

        const transactions = await db.transaction.findMany({where:{userId}})
        
        const balance = transactions.reduce((acc,transaction) => acc + transaction.amount,0)
        return {balance};
        
    } catch (error) {
        return {error: 'Balance not found'}
    }

}

export default getUserBalance
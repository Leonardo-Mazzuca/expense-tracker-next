'use server'

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"


export async function deleteTransaction(userId: string,transactionId: string):Promise<{
    message?:string,
    error?:string
}> {

    
    try {
        
        await db.transaction.delete({where:{id:transactionId,userId}})

        revalidatePath('/')

        return {message: 'Transaction deleted successfully'}
        
    } catch (error:any) {
        return {error}
    }

}
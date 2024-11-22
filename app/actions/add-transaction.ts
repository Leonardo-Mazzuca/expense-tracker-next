'use server'

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";



async function addTransaction (formData:FormData):Promise<TransactionResult> {

    const {userId} = await auth();

    if(!userId) {
        return {error: 'User not found'}
    }

    const textValue = formData.get('text');
    const amountValue = formData.get('amount');

    if(!textValue || !amountValue){
        return {error: 'Text or amount is missing'};
    }

    const text: string = textValue.toString();
    const amount: number = parseFloat(amountValue.toString())

    try {
        
        const transactionData = await db.transaction.create({
            data: {
                userId,
                text,
                amount
            }
        })

        revalidatePath('/')
        return {data: transactionData};

    } catch (error:any) {

        return{error: 'Transaction not added: ' + error.message};

    }


}

export default addTransaction
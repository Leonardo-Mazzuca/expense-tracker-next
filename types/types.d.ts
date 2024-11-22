


declare global {


    type CreateUserDto = {
        clerkUserId: string,
        email: string,
        name: string,
        imageUrl: string,
    }

    type TransactionData = {
        text:string,
        amount: number
    }

    type TransactionResult = {
        data?:TransactionData,
        error?: string
    }

    type Transaction = {
        id: string,
        text: string,
        amount: number,
        userId: string,
        createdAt: Date
    }

}

export {}
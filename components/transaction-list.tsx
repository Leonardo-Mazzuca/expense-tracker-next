'use client'
import getTransactions from "@/app/actions/get-transactions"
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import TransactionItem from "./transaction-item"


const TransactionList = () => {

    const [transactions, setTransactions] = useState<Transaction[]>([])
    const {user,isLoaded} = useUser();
    const [error, setError] = useState('')

    if(!isLoaded || !user){
        return null;
    }

    useEffect(()=> {
        const fetchTransactions = async () => {
            if(user){
                const transactions = await getTransactions(user?.id);
                if(transactions.transactions) {
                    setTransactions(transactions.transactions)
                }
                if(transactions.error){
                    setError(transactions.error)
                }
            }
        }

        fetchTransactions();
    },[user])

    if(error){
        return <p className="error">
           {error}
        </p>
    }

  return (

  <>
    <h3>
        History
    </h3>
    <ul className="list">
        {transactions  && transactions.map((transaction)=> (
            <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
    </ul>
  </>

  )

}

export default TransactionList
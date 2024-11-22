'use client'
import AddTransaction from "@/components/add-transaction";
import Balance from "@/components/balance";
import Guest from "@/components/guest"
import IncomeExpense from "@/components/income-expense";
import TransactionList from "@/components/transaction-list";
import { useUser } from "@clerk/nextjs"


const HomePage = () => {

  const {user,isLoaded} = useUser();

  if(!isLoaded){
    return null;
  }

  if(!user){
    return <Guest />
  }

  return (
   <main>

    <h2>
      Welcome, {user.firstName}
    </h2>
    
    <Balance />

    <IncomeExpense />

    <AddTransaction />

    <TransactionList />
    
   </main>
  )
}

export default HomePage
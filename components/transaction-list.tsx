
import getTransactions from "@/app/actions/get-transactions"
import TransactionItem from "./transaction-item"


const TransactionList = async () => {

    const {error,transactions} = await getTransactions();

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
        {transactions  && transactions?.map((transaction)=> (
            <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
    </ul>
  </>

  )

}

export default TransactionList
'use client'
import { deleteTransaction } from "@/app/actions/delete-transaction";
import { addCommas } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";

const TransactionItem = ({
  transaction: { amount, id, text },
}: {
  transaction: Transaction;
}) => {

  const {user,isLoaded} = useUser();
  const handleDeleteTransaction = async (transactionId: string) => {

    const confirm = window.confirm('Are you sure you want to delete this transaction?')

    if(!confirm){
      return
    }

    if(user) {

      const {message,error} = await deleteTransaction(user?.id,transactionId)
      
      if(message){
        toast.success(message)
      }
      
      if(error){
        toast.error(error)
      }

    }

  }


  if(!user || !isLoaded){
    return null;
  }

  return (

    <li className={amount < 0 ? "minus" : "plus"}>

      {text}

      <span>
        {amount<0 ? '-' : '+'}${addCommas(Math.abs(amount))}
      </span>

      <button className="delete-btn" onClick={()=>handleDeleteTransaction(id)}>
        X
      </button>
    </li>

  );
};

export default TransactionItem;

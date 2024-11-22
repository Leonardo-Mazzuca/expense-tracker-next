'use client'

import addTransaction from "@/app/actions/add-transaction"
import { useUser } from "@clerk/nextjs"
import { useRef } from "react"
import { toast } from "react-toastify"


const AddTransaction = () => {

    const {user,isLoaded} = useUser();

    if(!isLoaded || !user){
        return null;
    }

    const formRef = useRef<HTMLFormElement>(null);

    const clientAction = async (formData:FormData) => {

        const {data,error} = await addTransaction(formData,user?.id)
        
        if(error){

            toast.error(error)

        } else {

            toast.success('Transaction added successfully')
            formRef.current?.reset();
            
        }
        
    }

  return (
   <>

    <h3>
      Add Transaction
    </h3>

    <form ref={formRef} action={clientAction}>

        <div className="form-control">
            <label htmlFor="text">
                Text
            </label>
            <input
                name="text"
                id="text"
                type="text"
                placeholder="Enter text..."
            />
        </div>
        <div className="form-control">
            <label htmlFor="amount">
                Amount <br /> (negative - expense, positive - income)
            </label>
            <input
                type="number"
                name="amount"
                id="amount"
                placeholder="Enter amount"
                step={"0.01"}
            />
          
        </div>
        <button className="btn">
            Add transaction
        </button>

    </form>

   </>
  )

}

export default AddTransaction
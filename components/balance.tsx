

import getUserBalance from '@/app/actions/get-user-balance';
import { addCommas } from '@/lib/utils';

const Balance = async () => {


    const {balance,error} = await getUserBalance();

    if(error){
        return <p className="error">{error}</p>;
    }

  return (
    
    <>
    
        <h4>
            Your balance
        </h4>
        <h1>
            ${addCommas(Number(balance?.toFixed(2))) ?? 0}
        </h1>
        
    </>

  )

}

export default Balance
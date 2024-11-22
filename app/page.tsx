import AddTransaction from '@/components/add-transaction';
import Balance from '@/components/balance';
import Guest from '@/components/guest';
import IncomeExpense from '@/components/income-expense';
import TransactionList from '@/components/transaction-list';
import { currentUser } from '@clerk/nextjs/server';


const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main>
      <h2>Welcome, {user.firstName}</h2>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList />
    </main>
  );
};

export default HomePage;
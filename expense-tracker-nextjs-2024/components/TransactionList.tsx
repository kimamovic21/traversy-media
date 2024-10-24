import { Transaction } from '@/types/Transaction';

function TransactionList() {
  let transactions = [];

  return ( 
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions && transactions.map((transaction: Transaction) => (
            <p>{transaction.text}</p>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
import React from 'react';

const TransactionTable = ({ transactions, sortBy, onDelete }) => {
  const sortedTransactions = [...transactions].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action</th> {}
        </tr>
      </thead>
      <tbody>
        {sortedTransactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.category}</td>
            <td>
              <button onClick={() => onDelete(transaction.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;


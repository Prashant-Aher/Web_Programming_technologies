import React from 'react';

const AccountComponent = ({ accounts }) => {
  return (
    <div>
      <h2>Account Details</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Account ID</th>
            <th>Account Name</th>
            <th>Account Type</th>
            <th>Balance</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={index}>
              <td>{account.accountId}</td>
              <td>{account.accountName}</td>
              <td>{account.accountType}</td>
              <td>{account.balance}</td>
              <td>{account.creationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountComponent;

import React, { useState } from 'react';
import AccountComponent from './components/AccountComponent';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


const App = () => {
  // State to store the account information
  const [accountArray, setAccountArray] = useState([]);

  // Function to handle form submission and add account data to the array
  const handleFormSubmit = (event) => {
    event.preventDefault();

    

    // Get the form values
    const accountId = event.target.elements.accountId.value;
    const accountName = event.target.elements.accountName.value;
    const accountType = event.target.elements.accountType.value;
    const balance = parseFloat(event.target.elements.balance.value);
    const creationDate = event.target.elements.creationDate.value;

    // Validate balance (must be numeric and not less than Rs 5000)
    if (isNaN(balance) || balance < 5000) {
      alert('Balance must be a numeric value and cannot be less than Rs 5000.');
      return;
    }

    // Create a JavaScript object with the form data
    const accountInfo = {
      accountId: accountId,
      accountName: accountName,
      accountType: accountType,
      balance: balance,
      creationDate: creationDate
    };

    // Add the accountInfo to the accountArray
    setAccountArray([...accountArray, accountInfo]);

    // Reset the form fields
    event.target.reset();
  };

  return (
    <div className="container mt-4">
      
      <h1>Bank Account Details Form</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="accountId">Account Id:</label>
          <input type="text" className="form-control" id="accountId" required />
        </div>
        <div className="form-group">
          <label htmlFor="accountName">Account Name:</label>
          <input type="text" className="form-control" id="accountName" required />
        </div>
        <div className="form-group">
          <label htmlFor="accountType">Account Type:</label>
          <select className="form-control" id="accountType" required>
            <option value="">Select Account Type</option>
            <option value="Saving">Saving</option>
            <option value="Current">Current</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="balance">Balance:</label>
          <input type="number" className="form-control" id="balance" min="5000" required />
        </div>
        <div className="form-group">
          <label htmlFor="creationDate">Creation Date:</label>
          <input type="date" className="form-control" id="creationDate" required />
        </div>

        <button type="submit" className="btn btn-primary">Save Info</button>
        <button type="button" className="btn btn-secondary" onClick={() => console.log(accountArray)}>Account Info</button>
      </form>

      {/* Pass the accountArray to the AccountComponent */}
      <AccountComponent accounts={accountArray} />
    </div>
  );
};

export default App;

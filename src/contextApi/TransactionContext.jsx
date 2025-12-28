import React, { createContext, useReducer } from "react";

const TransactionContext = createContext();

const initialState = {
  transactions: [],
};

// Validate transaction object has all required fields
function validateTransaction(transaction) {
  const requiredFields = ['id', 'type', 'amount', 'description', 'date'];
  const missingFields = requiredFields.filter(field => !transaction[field]);
  
  if (missingFields.length > 0) {
    console.error('Invalid transaction: Missing required fields', missingFields);
    return false;
  }

  // Validate types
  if (typeof transaction.id !== 'string' && typeof transaction.id !== 'number') {
    console.error('Invalid transaction: id must be string or number');
    return false;
  }

  if (transaction.type !== 'income' && transaction.type !== 'expense') {
    console.error('Invalid transaction: type must be "income" or "expense"');
    return false;
  }

  if (typeof transaction.amount !== 'number' || transaction.amount <= 0) {
    console.error('Invalid transaction: amount must be a positive number');
    return false;
  }

  if (typeof transaction.description !== 'string' || transaction.description.trim() === '') {
    console.error('Invalid transaction: description must be a non-empty string');
    return false;
  }

  if (!transaction.date) {
    console.error('Invalid transaction: date is required');
    return false;
  }

  return true;
}

function transactionReducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      // Validate transaction before adding
      if (!validateTransaction(action.payload)) {
        console.error('Transaction validation failed, transaction not added');
        return state; // Return current state if validation fails
      }
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
}

function TransactionProvider({ children }) {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
}

export { TransactionProvider, TransactionContext };

import React, { createContext, useReducer, useEffect } from "react";

const TransactionContext = createContext();

// Load transactions from localStorage
const loadTransactions = () => {
  try {
    const storedTransactions = localStorage.getItem("expense_tracker_transactions");
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  } catch (error) {
    console.error("Error loading transactions from localStorage:", error);
    return [];
  }
};

// Save transactions to localStorage
const saveTransactions = (transactions) => {
  try {
    localStorage.setItem("expense_tracker_transactions", JSON.stringify(transactions));
  } catch (error) {
    console.error("Error saving transactions to localStorage:", error);
    // Graceful degradation - don't crash the app if localStorage fails
  }
};

const initialState = {
  transactions: loadTransactions(), // Load from localStorage on initialization
};

// Validate transaction object has all required fields
function validateTransaction(transaction) {
  const requiredFields = ['id', 'type', 'amount', 'description', 'date', 'category'];
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

  if (typeof transaction.category !== 'string' || !transaction.category.trim()) {
    console.error('Invalid transaction: category must be a non-empty string');
    return false;
  }

  return true;
}

export function transactionReducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      // Add default category if not provided
      const transactionWithCategory = {
        ...action.payload,
        category: action.payload.category || 'Other'
      };
      // Validate transaction before adding
      if (!validateTransaction(transactionWithCategory)) {
        console.error('Transaction validation failed, transaction not added');
        return state; // Return current state if validation fails
      }
      const newTransactions = [transactionWithCategory, ...state.transactions];
      saveTransactions(newTransactions); // Save to localStorage
      return {
        ...state,
        transactions: newTransactions,
      };
    case "DELETE_TRANSACTION":
      const updatedTransactions = state.transactions.filter(
        transaction => transaction.id !== action.payload
      );
      saveTransactions(updatedTransactions); // Save to localStorage
      return {
        ...state,
        transactions: updatedTransactions,
      };
    case "UPDATE_TRANSACTION":
      // Validate transaction before updating
      if (!validateTransaction(action.payload)) {
        console.error('Transaction validation failed, transaction not updated');
        return state; // Return current state if validation fails
      }
      const transactionsAfterUpdate = state.transactions.map(
        transaction => transaction.id === action.payload.id ? action.payload : transaction
      );
      saveTransactions(transactionsAfterUpdate); // Save to localStorage
      return {
        ...state,
        transactions: transactionsAfterUpdate,
      };
    default:
      return state;
  }
}

function TransactionProvider({ children }) {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  // Save to localStorage whenever state.transactions changes
  useEffect(() => {
    saveTransactions(state.transactions);
  }, [state.transactions]);

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
}

export { TransactionProvider, TransactionContext };

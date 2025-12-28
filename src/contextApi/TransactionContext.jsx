import React, { createContext, useReducer, useEffect } from "react";

const TransactionContext = createContext();

const initialState = {
  transactions: [],
};

function transactionReducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
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

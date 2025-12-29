import { transactionReducer } from '../contextApi/TransactionContext';

// Define the initial state here for testing
const initialState = {
  transactions: [],
};

describe('Transaction Reducer', () => {
  const mockTransaction = {
    id: '1',
    type: 'income',
    amount: 100,
    description: 'Test transaction',
    date: '2023-01-01',
    category: 'Salary'
  };

  it('should return the initial state', () => {
    const newState = transactionReducer(initialState, { type: '@@INIT' });
    expect(newState).toEqual(initialState);
  });

  it('should handle ADD_TRANSACTION', () => {
    const action = {
      type: 'ADD_TRANSACTION',
      payload: mockTransaction
    };

    const newState = transactionReducer(initialState, action);

    expect(newState.transactions).toHaveLength(1);
    expect(newState.transactions[0]).toEqual(mockTransaction);
  });

  it('should handle ADD_TRANSACTION with default category', () => {
    const transactionWithoutCategory = {
      id: '2',
      type: 'expense',
      amount: 50,
      description: 'Test expense',
      date: '2023-01-02'
    };

    const action = {
      type: 'ADD_TRANSACTION',
      payload: transactionWithoutCategory
    };

    const newState = transactionReducer(initialState, action);

    expect(newState.transactions).toHaveLength(1);
    expect(newState.transactions[0].category).toBe('Other');
  });

  it('should not add invalid transaction', () => {
    const invalidTransaction = {
      id: '3',
      type: 'income',
      amount: -100, // Invalid: negative amount
      description: 'Invalid transaction',
      date: '2023-01-03',
      category: 'Food'
    };

    const action = {
      type: 'ADD_TRANSACTION',
      payload: invalidTransaction
    };

    const newState = transactionReducer(initialState, action);

    expect(newState.transactions).toHaveLength(0); // Should remain unchanged
  });

  it('should handle DELETE_TRANSACTION', () => {
    const stateWithTransactions = {
      transactions: [
        { id: '1', type: 'income', amount: 100, description: 'Test 1', date: '2023-01-01', category: 'Salary' },
        { id: '2', type: 'expense', amount: 50, description: 'Test 2', date: '2023-01-02', category: 'Food' }
      ]
    };

    const action = {
      type: 'DELETE_TRANSACTION',
      payload: '1'
    };

    const newState = transactionReducer(stateWithTransactions, action);

    expect(newState.transactions).toHaveLength(1);
    expect(newState.transactions[0].id).toBe('2');
  });

  it('should handle UPDATE_TRANSACTION', () => {
    const stateWithTransactions = {
      transactions: [
        { id: '1', type: 'income', amount: 100, description: 'Test 1', date: '2023-01-01', category: 'Salary' },
        { id: '2', type: 'expense', amount: 50, description: 'Test 2', date: '2023-01-02', category: 'Food' }
      ]
    };

    const updatedTransaction = {
      id: '1',
      type: 'expense',
      amount: 150,
      description: 'Updated transaction',
      date: '2023-01-01',
      category: 'Shopping'
    };

    const action = {
      type: 'UPDATE_TRANSACTION',
      payload: updatedTransaction
    };

    const newState = transactionReducer(stateWithTransactions, action);

    expect(newState.transactions).toHaveLength(2);
    const updatedItem = newState.transactions.find(t => t.id === '1');
    expect(updatedItem).toEqual(updatedTransaction);
  });

  it('should not update invalid transaction', () => {
    const stateWithTransactions = {
      transactions: [
        { id: '1', type: 'income', amount: 100, description: 'Test 1', date: '2023-01-01', category: 'Salary' }
      ]
    };

    const invalidUpdatedTransaction = {
      id: '1',
      type: 'income',
      amount: -50, // Invalid: negative amount
      description: 'Updated transaction',
      date: '2023-01-01',
      category: 'Salary'
    };

    const action = {
      type: 'UPDATE_TRANSACTION',
      payload: invalidUpdatedTransaction
    };

    const newState = transactionReducer(stateWithTransactions, action);

    // State should remain unchanged since the update was invalid
    expect(newState.transactions).toHaveLength(1);
    expect(newState.transactions[0].amount).toBe(100); // Original value
  });

  it('should return state for unknown action', () => {
    const action = {
      type: 'UNKNOWN_ACTION'
    };

    const newState = transactionReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
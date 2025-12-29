import { renderHook } from '@testing-library/react';
import useTransactionCalculations from '../hooks/useTransactionCalculations';

describe('useTransactionCalculations', () => {
  const mockTransactions = [
    { id: '1', type: 'income', amount: 100, description: 'Salary', date: '2023-01-01', category: 'Salary' },
    { id: '2', type: 'expense', amount: 50, description: 'Groceries', date: '2023-01-02', category: 'Food' },
    { id: '3', type: 'expense', amount: 30, description: 'Gas', date: '2023-01-03', category: 'Transport' },
    { id: '4', type: 'income', amount: 200, description: 'Freelance', date: '2023-01-04', category: 'Other' },
  ];

  it('should calculate total income correctly', () => {
    const { result } = renderHook(() => useTransactionCalculations(mockTransactions));
    
    expect(result.current.totalIncome).toBe(300); // 100 + 200
  });

  it('should calculate total expense correctly', () => {
    const { result } = renderHook(() => useTransactionCalculations(mockTransactions));
    
    expect(result.current.totalExpense).toBe(80); // 50 + 30
  });

  it('should calculate total balance correctly', () => {
    const { result } = renderHook(() => useTransactionCalculations(mockTransactions));
    
    expect(result.current.totalBalance).toBe(220); // 300 - 80
  });

  it('should separate income and expense transactions', () => {
    const { result } = renderHook(() => useTransactionCalculations(mockTransactions));
    
    expect(result.current.incomeTransactions).toHaveLength(2);
    expect(result.current.expenseTransactions).toHaveLength(2);
  });

  it('should group transactions by category', () => {
    const { result } = renderHook(() => useTransactionCalculations(mockTransactions));
    
    expect(result.current.transactionsByCategory).toHaveProperty('Salary');
    expect(result.current.transactionsByCategory).toHaveProperty('Food');
    expect(result.current.transactionsByCategory).toHaveProperty('Transport');
    expect(result.current.transactionsByCategory).toHaveProperty('Other');
  });

  it('should calculate totals by category', () => {
    const { result } = renderHook(() => useTransactionCalculations(mockTransactions));
    
    expect(result.current.totalsByCategory.Salary).toBe(100);
    expect(result.current.totalsByCategory.Food).toBe(50);
    expect(result.current.totalsByCategory.Transport).toBe(30);
    expect(result.current.totalsByCategory.Other).toBe(200);
  });

  it('should calculate expenses by category', () => {
    const { result } = renderHook(() => useTransactionCalculations(mockTransactions));
    
    expect(result.current.expensesByCategory.Food).toBe(50);
    expect(result.current.expensesByCategory.Transport).toBe(30);
    expect(result.current.expensesByCategory).not.toHaveProperty('Salary'); // No expenses in Salary category
  });

  it('should calculate income by category', () => {
    const { result } = renderHook(() => useTransactionCalculations(mockTransactions));
    
    expect(result.current.incomeByCategory.Salary).toBe(100);
    expect(result.current.incomeByCategory.Other).toBe(200);
    expect(result.current.incomeByCategory).not.toHaveProperty('Food'); // No income in Food category
  });

  it('should return 0 for all values when no transactions provided', () => {
    const { result } = renderHook(() => useTransactionCalculations([]));
    
    expect(result.current.totalIncome).toBe(0);
    expect(result.current.totalExpense).toBe(0);
    expect(result.current.totalBalance).toBe(0);
    expect(result.current.incomeTransactions).toHaveLength(0);
    expect(result.current.expenseTransactions).toHaveLength(0);
  });

  it('should handle transactions without category', () => {
    const transactionsWithNoCategory = [
      { id: '1', type: 'income', amount: 100, description: 'Salary', date: '2023-01-01' }, // No category
      { id: '2', type: 'expense', amount: 50, description: 'Groceries', date: '2023-01-02' }, // No category
    ];
    
    const { result } = renderHook(() => useTransactionCalculations(transactionsWithNoCategory));
    
    expect(result.current.totalsByCategory.Other).toBe(150); // 100 + 50
  });
});
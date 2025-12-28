import { useMemo } from 'react';

const useTransactionCalculations = (transactions) => {
  // Memoize the calculations to prevent unnecessary recalculations
  const calculations = useMemo(() => {
    // Calculate total income
    const totalIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((acc, t) => acc + t.amount, 0);

    // Calculate total expense
    const totalExpense = transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, t) => acc + t.amount, 0);

    // Calculate total balance
    const totalBalance = totalIncome - totalExpense;

    // Separate income and expense transactions
    const incomeTransactions = transactions.filter(t => t.type === 'income');
    const expenseTransactions = transactions.filter(t => t.type === 'expense');

    return {
      totalIncome,
      totalExpense,
      totalBalance,
      incomeTransactions,
      expenseTransactions
    };
  }, [transactions]); // Only recalculate when transactions change

  return calculations;
};

export default useTransactionCalculations;
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

    // Group transactions by category
    const transactionsByCategory = transactions.reduce((acc, transaction) => {
      const category = transaction.category || 'Other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(transaction);
      return acc;
    }, {});

    // Calculate total by category
    const totalsByCategory = {};
    for (const [category, categoryTransactions] of Object.entries(transactionsByCategory)) {
      totalsByCategory[category] = categoryTransactions.reduce((sum, t) => sum + t.amount, 0);
    }

    // Calculate expenses by category
    const expensesByCategory = {};
    transactions
      .filter(t => t.type === 'expense')
      .forEach(t => {
        const category = t.category || 'Other';
        if (!expensesByCategory[category]) {
          expensesByCategory[category] = 0;
        }
        expensesByCategory[category] += t.amount;
      });

    // Calculate income by category
    const incomeByCategory = {};
    transactions
      .filter(t => t.type === 'income')
      .forEach(t => {
        const category = t.category || 'Other';
        if (!incomeByCategory[category]) {
          incomeByCategory[category] = 0;
        }
        incomeByCategory[category] += t.amount;
      });

    return {
      totalIncome,
      totalExpense,
      totalBalance,
      incomeTransactions,
      expenseTransactions,
      transactionsByCategory,
      totalsByCategory,
      expensesByCategory,
      incomeByCategory
    };
  }, [transactions]); // Only recalculate when transactions change

  return calculations;
};

export default useTransactionCalculations;
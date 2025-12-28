import React, { useContext, useState } from "react";
import { TransactionContext } from "../contextApi/TransactionContext";
import TransactionForm from "../components/TransactionForm";
import style from "./Dashboard.module.css";

export default function Transaction() {
  const { state } = useContext(TransactionContext);
  const { transactions } = state;

  const [isAdding, setIsAdding] = useState(false);

  // Separate income and expenses
  const incomeTransactions = transactions.filter(t => t.type === 'income');
  const expenseTransactions = transactions.filter(t => t.type === 'expense');

  return (
    <div className={style.grid}>
      <div className={`${style.card} ${style.quickActionsCard}`}>
        <button
          className={style.addTransactionBtn}
          onClick={() => setIsAdding(true)}
        >
          + Add Transaction
        </button>
        {isAdding && (
          <div style={{ marginTop: '1rem' }}>
            <TransactionForm onClose={() => setIsAdding(false)} />
          </div>
        )}
      </div>

      <div className={`${style.card} ${style.keyMetricsCard}`}>
        <div className={style.metric}>
          <h3>Total Income</h3>
          <p className={style.income}>
            ${incomeTransactions.reduce((acc, t) => acc + t.amount, 0)}
          </p>
        </div>
        <div className={style.metric}>
          <h3>Total Expense</h3>
          <p className={style.expense}>
            ${expenseTransactions.reduce((acc, t) => acc + t.amount, 0)}
          </p>
        </div>
        <div className={style.metric}>
          <h3>Balance</h3>
          <p className={style.balance}>
            ${incomeTransactions.reduce((acc, t) => acc + t.amount, 0) - 
              expenseTransactions.reduce((acc, t) => acc + t.amount, 0)}
          </p>
        </div>
      </div>

      <div className={`${style.card} ${style.recentActivityCard}`} style={{ gridColumn: '1 / -1' }}>
        <h2>All Transactions</h2>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#4ade80', marginBottom: '1rem' }}>Income</h3>
            <ul className={style.recentActivityList}>
              {incomeTransactions.map((transaction) => (
                <li key={transaction.id} className={style.recentActivityItem}>
                  <span>{transaction.description}</span>
                  <span className={style.income}>
                    +${transaction.amount.toFixed(2)}
                  </span>
                </li>
              ))}
              {incomeTransactions.length === 0 && (
                <li className={style.recentActivityItem}>No income transactions</li>
              )}
            </ul>
          </div>
          
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#f87171', marginBottom: '1rem' }}>Expenses</h3>
            <ul className={style.recentActivityList}>
              {expenseTransactions.map((transaction) => (
                <li key={transaction.id} className={style.recentActivityItem}>
                  <span>{transaction.description}</span>
                  <span className={style.expense}>
                    -${transaction.amount.toFixed(2)}
                  </span>
                </li>
              ))}
              {expenseTransactions.length === 0 && (
                <li className={style.recentActivityItem}>No expense transactions</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
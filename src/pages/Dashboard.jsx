import React, { useContext, useState, useMemo } from "react";
import PropTypes from 'prop-types';
import Chart from "../components/Chart";
import style from "./Dashboard.module.css";
import { TransactionContext } from "../contextApi/TransactionContext";
import TransactionForm from "../components/TransactionForm";
import useTransactionCalculations from "../hooks/useTransactionCalculations";

const TransactionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "15px",
        }}
      >
        <TransactionForm onClose={onClose} />
      </div>
    </div>
  );
};

TransactionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default function Dashboard() {
  const { state, dispatch } = useContext(TransactionContext);
  const { transactions } = state;

  // Use the custom hook for calculations
  const { totalIncome, totalExpense, totalBalance } = useTransactionCalculations(transactions);

  // Memoize the recent transactions to prevent unnecessary recalculations
  const recentTransactions = useMemo(() => {
    return transactions.slice(0, 5);
  }, [transactions]);

  const [isModalOpen, setModalOpen] = useState(false);

  // Function to handle delete transaction
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id
      });
    }
  };

  return (
    <>
      <div className={style.grid}>
        <div className={`${style.card} ${style.chartCard}`}>
          <h2>Income vs. Expense</h2>
          <Chart />
        </div>

        <div className={`${style.card} ${style.quickActionsCard}`}>
          <button
            className={style.addTransactionBtn}
            onClick={() => setModalOpen(true)}
          >
            + Add Transaction
          </button>
        </div>

        <div className={`${style.card} ${style.keyMetricsCard}`}>
          <div className={style.metric}>
            <h3>Total Income</h3>
            <p className={style.income}>${totalIncome}</p>
          </div>
          <div className={style.metric}>
            <h3>Total Expense</h3>
            <p className={style.expense}>${totalExpense}</p>
          </div>
          <div className={style.metric}>
            <h3>Balance</h3>
            <p className={style.balance}>${totalBalance}</p>
          </div>
        </div>

        <div className={`${style.card} ${style.recentActivityCard}`}>
          <h2>Recent Activity</h2>
          <ul className={style.recentActivityList}>
            {recentTransactions.map((transaction) => (
              <li key={transaction.id} className={style.recentActivityItem}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <span>{transaction.description}</span>
                  <div>
                    <span
                      className={
                        transaction.type === "income" ? style.income : style.expense
                      }
                    >
                      {transaction.type === "income" ? "+" : "-"}$
                      {transaction.amount.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleDelete(transaction.id)}
                      style={{
                        marginLeft: '10px',
                        backgroundColor: '#f87171',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        cursor: 'pointer'
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <TransactionModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

Dashboard.propTypes = {
  transactions: PropTypes.array
};
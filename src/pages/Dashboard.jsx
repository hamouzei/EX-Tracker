import React, { useContext, useState } from "react";
import Chart from "../components/Chart";
import style from "./Dashboard.module.css";
import { TransactionContext } from "../contextApi/TransactionContext";
import TransactionForm from "../components/TransactionForm";

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

export default function Dashboard() {
  const { state } = useContext(TransactionContext);
  const { transactions } = state;

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalBalance = totalIncome - totalExpense;

  const [isModalOpen, setModalOpen] = useState(false);

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
            {transactions.slice(0, 5).map((transaction) => (
              <li key={transaction.id} className={style.recentActivityItem}>
                <span>{transaction.description}</span>
                <span
                  className={
                    transaction.type === "income" ? style.income : style.expense
                  }
                >
                  {transaction.type === "income" ? "+" : "-"}$
                  {transaction.amount.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <TransactionModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
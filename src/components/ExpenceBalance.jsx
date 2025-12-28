import React, { useContext } from "react";
import style from "../components/ExpenceBalance.module.css";
import { ExpenseContext } from "../contextApi/ExpenseContext";

export default function ExpenceBalance() {
  const { state } = useContext(ExpenseContext);
  const { totalExpense, error } = state;

  return (
    <div className={style.expenceBalanceHole}>
      <div className={style.expenceBalance}>
        Total Expense: <span> ${totalExpense || 0}</span>
      </div>
      <span className={style.expenceError}>{error}</span>
    </div>
  );
}

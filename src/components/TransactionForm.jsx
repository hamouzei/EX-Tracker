import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import style from "./TransactionForm.module.css";
import { TransactionContext } from "../contextApi/TransactionContext";

export default function TransactionForm({ onClose }) {
  const [transactionType, setTransactionType] = useState("expense");
  const { dispatch } = useContext(TransactionContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: { ...data, type: transactionType, id: Date.now() },
    });
    reset();
    onClose();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.toggle}>
        <button
          type="button"
          className={transactionType === "income" ? style.active : ""}
          onClick={() => setTransactionType("income")}
        >
          Income
        </button>
        <button
          type="button"
          className={transactionType === "expense" ? style.active : ""}
          onClick={() => setTransactionType("expense")}
        >
          Expense
        </button>
      </div>

      <input
        type="text"
        placeholder="Description"
        {...register("description", { required: "Description is required" })}
      />
      {errors.description && <p>{errors.description.message}</p>}

      <input
        type="number"
        placeholder="Amount"
        {...register("amount", {
          required: "Amount is required",
          valueAsNumber: true,
        })}
      />
      {errors.amount && <p>{errors.amount.message}</p>}

      <input
        type="date"
        {...register("date", { required: "Date is required" })}
      />
      {errors.date && <p>{errors.date.message}</p>}

      <button type="submit">Save Transaction</button>
    </form>
  );
}

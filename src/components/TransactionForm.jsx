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

  // Generate unique ID for transaction
  const generateUniqueId = () => {
    // Use crypto.randomUUID() for modern browsers, fallback to timestamp + random
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
  };

  const onSubmit = (data) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: { ...data, type: transactionType, id: generateUniqueId() },
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
        step="0.01"
        min="0.01"
        {...register("amount", {
          required: "Amount is required",
          valueAsNumber: true,
          min: {
            value: 0.01,
            message: "Amount must be greater than 0",
          },
          max: {
            value: 999999999,
            message: "Amount is too large",
          },
        })}
      />
      {errors.amount && <p>{errors.amount.message}</p>}

      <input
        type="date"
        max={new Date().toISOString().split('T')[0]}
        {...register("date", { 
          required: "Date is required",
          validate: (value) => {
            const selectedDate = new Date(value);
            const today = new Date();
            today.setHours(23, 59, 59, 999); // End of today
            if (selectedDate > today) {
              return "Date cannot be in the future";
            }
            return true;
          }
        })}
      />
      {errors.date && <p>{errors.date.message}</p>}

      <button type="submit">Save Transaction</button>
    </form>
  );
}

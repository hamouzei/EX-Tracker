import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import style from "./TransactionForm.module.css";
import { TransactionContext } from "../contextApi/TransactionContext";
import { useToast } from "../contextApi/ToastContext";

export default function TransactionForm({ onClose, transaction = null }) {
  const [transactionType, setTransactionType] = useState("expense");
  const { dispatch } = useContext(TransactionContext);
  const { addToast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue
  } = useForm();

  // Generate unique ID for transaction
  const generateUniqueId = () => {
    // Use crypto.randomUUID() for modern browsers, fallback to timestamp + random
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
  };

  // Set form values when editing a transaction
  useEffect(() => {
    if (transaction) {
      setValue('description', transaction.description);
      setValue('amount', transaction.amount);
      setValue('date', transaction.date);
      setValue('category', transaction.category || 'Other');
      setTransactionType(transaction.type);
    } else {
      // Reset form when not editing
      reset();
      setTransactionType('expense');
      setValue('category', 'Other');
    }
  }, [transaction, setValue, reset]);

  const onSubmit = (data) => {
    if (transaction) {
      // Update existing transaction
      dispatch({
        type: "UPDATE_TRANSACTION",
        payload: { ...data, type: transactionType, id: transaction.id },
      });
      addToast("Transaction updated successfully!", "success");
    } else {
      // Add new transaction
      dispatch({
        type: "ADD_TRANSACTION",
        payload: { ...data, type: transactionType, id: generateUniqueId() },
      });
      addToast("Transaction added successfully!", "success");
    }
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

      <div className={style.inputGroup}>
        <input
          type="text"
          placeholder="Description"
          {...register("description", { required: "Description is required" })}
          className={errors.description ? style.error : ''}
        />
        {errors.description && <span className={style.errorMessage}>{errors.description.message}</span>}
      </div>

      <div className={style.inputGroup}>
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
          className={errors.amount ? style.error : ''}
        />
        {errors.amount && <span className={style.errorMessage}>{errors.amount.message}</span>}
      </div>

      <div className={style.inputGroup}>
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
          className={errors.date ? style.error : ''}
        />
        {errors.date && <span className={style.errorMessage}>{errors.date.message}</span>}
      </div>

      <div className={style.inputGroup}>
        <select
          {...register("category", { required: "Category is required" })}
          className={errors.category ? style.error : ''}
        >
          <option value="">Select a category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
        {errors.category && <span className={style.errorMessage}>{errors.category.message}</span>}
      </div>

      <button type="submit">
        {transaction ? "Update Transaction" : "Save Transaction"}
      </button>
    </form>
  );
}

TransactionForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  transaction: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.oneOf(['income', 'expense']).isRequired,
    amount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
};

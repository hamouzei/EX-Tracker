import React, { useContext, useState, useMemo } from "react";
import PropTypes from 'prop-types';
import { TransactionContext } from "../contextApi/TransactionContext";
import TransactionForm from "../components/TransactionForm";
import EmptyState from "../components/EmptyState";
import SearchBar from "../components/SearchBar";
import DateRangeFilter from "../components/DateRangeFilter";
import ExportButton from "../components/ExportButton";
import { useToast } from "../contextApi/ToastContext";
import style from "./Dashboard.module.css";
import useTransactionCalculations from "../hooks/useTransactionCalculations";

export default function Transaction() {
  const { state, dispatch } = useContext(TransactionContext);
  const { transactions } = state;
  const { addToast } = useToast();

  // Use the custom hook for calculations
  const { totalIncome, totalExpense, totalBalance, incomeTransactions, expenseTransactions } = useTransactionCalculations(transactions);

  const [isAdding, setIsAdding] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('all');
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');

  // Filter transactions based on search term and date range
  const filteredIncomeTransactions = useMemo(() => {
    let result = incomeTransactions;

    // Apply search filter
    if (searchTerm) {
      result = result.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply date range filter
    if (dateRange !== 'all') {
      const now = new Date();
      let startDate = new Date(0); // Default to beginning of time
      let endDate = now; // Default to now

      switch (dateRange) {
        case 'today':
          startDate = new Date(now.setHours(0, 0, 0, 0));
          endDate = new Date(now.setHours(23, 59, 59, 999));
          break;
        case 'week':
          const startOfWeek = new Date(now);
          startOfWeek.setDate(now.getDate() - now.getDay()); // Sunday
          startDate = new Date(startOfWeek.setHours(0, 0, 0, 0));
          endDate = new Date(now.setHours(23, 59, 59, 999));
          break;
        case 'month':
          startDate = new Date(now.getFullYear(), now.getMonth(), 1);
          endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
          break;
        case 'year':
          startDate = new Date(now.getFullYear(), 0, 1);
          endDate = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
          break;
        case 'custom':
          if (customStartDate && customEndDate) {
            startDate = new Date(customStartDate);
            endDate = new Date(customEndDate);
            endDate.setHours(23, 59, 59, 999); // End of the selected day
          }
          break;
        default:
          break;
      }

      result = result.filter(transaction => {
        const transactionDate = new Date(transaction.date);
        return transactionDate >= startDate && transactionDate <= endDate;
      });
    }

    return result;
  }, [incomeTransactions, searchTerm, dateRange, customStartDate, customEndDate]);

  const filteredExpenseTransactions = useMemo(() => {
    let result = expenseTransactions;

    // Apply search filter
    if (searchTerm) {
      result = result.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply date range filter
    if (dateRange !== 'all') {
      const now = new Date();
      let startDate = new Date(0); // Default to beginning of time
      let endDate = now; // Default to now

      switch (dateRange) {
        case 'today':
          startDate = new Date(now.setHours(0, 0, 0, 0));
          endDate = new Date(now.setHours(23, 59, 59, 999));
          break;
        case 'week':
          const startOfWeek = new Date(now);
          startOfWeek.setDate(now.getDate() - now.getDay()); // Sunday
          startDate = new Date(startOfWeek.setHours(0, 0, 0, 0));
          endDate = new Date(now.setHours(23, 59, 59, 999));
          break;
        case 'month':
          startDate = new Date(now.getFullYear(), now.getMonth(), 1);
          endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
          break;
        case 'year':
          startDate = new Date(now.getFullYear(), 0, 1);
          endDate = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
          break;
        case 'custom':
          if (customStartDate && customEndDate) {
            startDate = new Date(customStartDate);
            endDate = new Date(customEndDate);
            endDate.setHours(23, 59, 59, 999); // End of the selected day
          }
          break;
        default:
          break;
      }

      result = result.filter(transaction => {
        const transactionDate = new Date(transaction.date);
        return transactionDate >= startDate && transactionDate <= endDate;
      });
    }

    return result;
  }, [expenseTransactions, searchTerm, dateRange, customStartDate, customEndDate]);

  // Function to handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Function to handle date range change
  const handleDateRangeChange = (range, startDate, endDate) => {
    setDateRange(range);
    if (range === 'custom' && startDate && endDate) {
      setCustomStartDate(startDate);
      setCustomEndDate(endDate);
    }
  };

  // Function to handle delete transaction
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id
      });
      addToast("Transaction deleted successfully!", "success");
    }
  };

  // Function to handle edit transaction
  const handleEdit = (transaction) => {
    setEditingTransaction(transaction);
  };

  // Function to close edit form
  const closeEditForm = () => {
    setEditingTransaction(null);
  };

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
        {editingTransaction && (
          <div style={{ marginTop: '1rem' }}>
            <TransactionForm
              transaction={editingTransaction}
              onClose={closeEditForm}
            />
          </div>
        )}
      </div>

      <div className={`${style.card} ${style.keyMetricsCard}`}>
        <div className={style.metric}>
          <h3>Total Income</h3>
          <p className={style.income}>
            ${totalIncome}
          </p>
        </div>
        <div className={style.metric}>
          <h3>Total Expense</h3>
          <p className={style.expense}>
            ${totalExpense}
          </p>
        </div>
        <div className={style.metric}>
          <h3>Balance</h3>
          <p className={style.balance}>
            ${totalBalance}
          </p>
        </div>
      </div>

      <div className={`${style.card} ${style.recentActivityCard}`} style={{ gridColumn: '1 / -1' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2>All Transactions</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <SearchBar onSearch={handleSearch} placeholder="Search transactions..." />
            <DateRangeFilter onDateRangeChange={handleDateRangeChange} />
            <ExportButton transactions={transactions} title="Export" />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#4ade80', marginBottom: '1rem' }}>Income</h3>
            {filteredIncomeTransactions.length > 0 ? (
              <ul className={style.recentActivityList}>
                {filteredIncomeTransactions.map((transaction) => (
                  <li key={transaction.id} className={style.recentActivityItem}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span>{transaction.description}</span>
                        <div style={{ fontSize: '0.8em', color: '#6b7280', marginTop: '4px' }}>
                          Category: {transaction.category}
                        </div>
                      </div>
                      <div>
                        <span className={style.income}>
                          +${transaction.amount.toFixed(2)}
                        </span>
                        <button
                          onClick={() => handleEdit(transaction)}
                          style={{
                            marginLeft: '10px',
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            cursor: 'pointer'
                          }}
                        >
                          Edit
                        </button>
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
            ) : (
              <EmptyState
                title={searchTerm ? "No Matching Income Transactions" : "No Income Transactions"}
                description={searchTerm
                  ? "No income transactions match your search."
                  : "You don't have any income transactions yet. Add your first income transaction to get started."}
                action={searchTerm ? null : (
                  <button
                    className={style.addTransactionBtn}
                    onClick={() => setIsAdding(true)}
                    style={{ backgroundColor: '#4ade80', color: 'white' }}
                  >
                    Add Income
                  </button>
                )}
              />
            )}
          </div>

          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#f87171', marginBottom: '1rem' }}>Expenses</h3>
            {filteredExpenseTransactions.length > 0 ? (
              <ul className={style.recentActivityList}>
                {filteredExpenseTransactions.map((transaction) => (
                  <li key={transaction.id} className={style.recentActivityItem}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span>{transaction.description}</span>
                        <div style={{ fontSize: '0.8em', color: '#6b7280', marginTop: '4px' }}>
                          Category: {transaction.category}
                        </div>
                      </div>
                      <div>
                        <span className={style.expense}>
                          -${transaction.amount.toFixed(2)}
                        </span>
                        <button
                          onClick={() => handleEdit(transaction)}
                          style={{
                            marginLeft: '10px',
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            cursor: 'pointer'
                          }}
                        >
                          Edit
                        </button>
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
            ) : (
              <EmptyState
                title={searchTerm ? "No Matching Expense Transactions" : "No Expense Transactions"}
                description={searchTerm
                  ? "No expense transactions match your search."
                  : "You don't have any expense transactions yet. Add your first expense transaction to get started."}
                action={searchTerm ? null : (
                  <button
                    className={style.addTransactionBtn}
                    onClick={() => setIsAdding(true)}
                    style={{ backgroundColor: '#f87171', color: 'white' }}
                  >
                    Add Expense
                  </button>
                )}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Transaction.propTypes = {
  transactions: PropTypes.array
};
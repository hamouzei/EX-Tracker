import React, { useContext, useMemo } from "react";
import PropTypes from 'prop-types';
import { formatDateToLocale } from '../utils/dateUtils';
import style from "../components/Chart.module.css";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJs,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { TransactionContext } from "../contextApi/TransactionContext";

// Register all required components
ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Chart() {
  const { state } = useContext(TransactionContext);
  const { transactions } = state;

  // Memoize chart data preparation to prevent unnecessary recalculations
  const chartData = useMemo(() => {
    // Handle empty transactions case
    if (!transactions || transactions.length === 0) {
      return {
        isEmpty: true,
        data: {
          labels: [],
          datasets: [
            {
              label: "Income",
              data: [],
              borderColor: "#4f46e5",
              backgroundColor: "rgba(79, 70, 229, 0.1)",
              tension: 0.4,
              fill: false,
            },
            {
              label: "Expense",
              data: [],
              borderColor: "#ef4444",
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              tension: 0.4,
              fill: false,
            },
          ],
        }
      };
    }

    // Combine and sort data by date for better visualization
    const allDates = transactions.map(item => new Date(item.date)).sort((a, b) => a - b);

    // Remove duplicate dates
    const uniqueDates = [...new Set(allDates.map(date => date.toISOString().split('T')[0]))].sort();

    // Calculate income and expense values for each date
    const incomeByDate = {};
    const expenseByDate = {};

    transactions.forEach(item => {
      const date = new Date(item.date).toISOString().split('T')[0];
      if (item.type === 'income') {
        if (!incomeByDate[date]) incomeByDate[date] = 0;
        incomeByDate[date] += item.amount;
      } else {
        if (!expenseByDate[date]) expenseByDate[date] = 0;
        expenseByDate[date] += item.amount;
      }
    });

    // Prepare data for chart
    const labels = uniqueDates.map(date => formatDateToLocale(new Date(date)));
    const incomeValues = uniqueDates.map(date => incomeByDate[date] || 0);
    const expenseValues = uniqueDates.map(date => expenseByDate[date] || 0);

    return {
      isEmpty: false,
      data: {
        labels: labels,
        datasets: [
          {
            label: "Income",
            data: incomeValues,
            borderColor: "#4f46e5",
            backgroundColor: "rgba(79, 70, 229, 0.1)",
            tension: 0.4,
            fill: false,
          },
          {
            label: "Expense",
            data: expenseValues,
            borderColor: "#ef4444",
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            tension: 0.4,
            fill: false,
          },
        ],
      }
    };
  }, [transactions]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Income vs Expense Over Time',
        font: {
          size: 16,
          weight: 'bold'
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    }
  };

  // Show empty state when no transactions exist
  if (chartData.isEmpty) {
    return (
      <div className={style.chart}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px',
          backgroundColor: '#f8fafc',
          borderRadius: '8px',
          border: '1px dashed #cbd5e1'
        }}>
          <p style={{ color: '#64748b', fontSize: '16px' }}>
            No transactions to display. Add some transactions to see the chart.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={style.chart}>
      <Line
        data={chartData.data}
        options={options}
      />
    </div>
  );
}

Chart.propTypes = {
  transactions: PropTypes.array
};


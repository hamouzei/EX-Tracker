import React, { useContext, useEffect, useRef } from "react";
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

  const chartRef = useRef(null);

  useEffect(() => {
    // Cleanup function to destroy the chart instance
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy the chart instance
      }
    };
  }, []);

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
  const labels = uniqueDates.map(date => new Date(date).toLocaleDateString());
  const incomeValues = uniqueDates.map(date => incomeByDate[date] || 0);
  const expenseValues = uniqueDates.map(date => expenseByDate[date] || 0);

  const data = {
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
  };

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

  return (
    <div className={style.chart}>
      <Line
        ref={chartRef} // Attach the ref to the Line component
        data={data}
        options={options}
      />
    </div>
  );
}


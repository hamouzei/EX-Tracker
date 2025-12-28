import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/Applayout";
import Transaction from "./pages/Transaction";
import ErrorBoundary from "./components/ErrorBoundary";
import { ToastProvider } from "./contextApi/ToastContext";
import ToastContainer from "./components/ToastContainer";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/transactions", element: <Transaction /> },
      ],
    },
  ]);

  return (
    <ErrorBoundary>
      <ToastProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </ToastProvider>
    </ErrorBoundary>
  );
};

export default App;
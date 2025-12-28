import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/Applayout";
import Transaction from "./pages/Transaction";
import ErrorBoundary from "./components/ErrorBoundary";

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
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default App;
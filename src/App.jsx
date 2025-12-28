
// import React, { useState } from "react";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Navigate,
// } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import AppLayout from "./ui/Applayout";
// import Income from "./pages/Income";
// import Expense from "./pages/Expence"; // Ensure the file name matches

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       element: <AppLayout />,
//       children: [
//         { path: "/", element: <Dashboard /> },
//         { path: "/income", element: <Income /> },
//         { path: "/expence", element: <Expense /> },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// };

// export default App;




import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/Applayout";
import Transaction from "./pages/Transaction";

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

  return <RouterProvider router={router} />;
};

export default App;
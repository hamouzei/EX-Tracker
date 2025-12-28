import React from "react";
import Profile from "../components/Profile";
import Header from "../components/Header";
import { Outlet } from "react-router";
import style from "../ui/Applayout.module.css";
import { TransactionProvider } from "../contextApi/TransactionContext";

export default function Applayout() {
  return (
    <TransactionProvider>
      <div className={style.layouts}>
        <header className={style.header}>
          <Header />
        </header>
        <main className={style.main}>
          <span className={style.mainSpan1}>
            <Profile />
          </span>
          <span className={style.mainSpan2}>
            <Outlet />
          </span>
        </main>
      </div>
    </TransactionProvider>
  );
}

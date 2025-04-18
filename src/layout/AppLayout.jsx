import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-20 md:pt-24 lg:pt-28 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;

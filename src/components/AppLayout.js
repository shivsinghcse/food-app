import React, {useEffect} from "react";
import Header from "./Header/Header";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const AppLayout = () => {
  const darkMode = useSelector((state) => state.cart.darkMode);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-500 transition-colors duration-300'>
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;

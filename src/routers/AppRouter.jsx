import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import MenuPage from "../pages/MenuPage";
import ReservationPage from "../pages/ReservationPage";
import TableReservPage from "../pages/TableReservPage";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/table" element={<TableReservPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

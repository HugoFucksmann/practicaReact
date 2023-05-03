import React, { useContext } from "react";
import LoginScreen from "./pages/login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MarketHeader from "./components/marketHeader";
import HomePage from "./pages/homePage";
import SettingsScreen from "./pages/settings";
import ProductosComp from "./pages/productos";
import { AppContext } from "./context/appContext";

const RootRouter = () => {
  const { isLogin } = useContext(AppContext);
  console.log("isLogin ", isLogin);

  if (!isLogin) return <LoginScreen />;

  return (
    <BrowserRouter>
      <MarketHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/productos" element={<ProductosComp />} />
        <Route path="/login" element={<LoginScreen />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Events from "../pages/Events";
import Reviews from "../pages/Reviews";
import Error from "../pages/Error";
import Feedback from "../pages/Feedback";
import { Context } from "../context/Context";
import { useContext } from "react";
import { Circles } from "react-loader-spinner";
import { privateRoutes, publicRoutes } from "../router/routes";
const AppRouter = () => {
  const { isAuth, isLoadingAuth } = useContext(Context);
  if (isLoadingAuth) {
    return (
      <div style={{ minHeight: "100vh" }}>
        <Circles color="white" />
      </div>
    );
  }
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route, index) => (
        <Route path={route.path} element={<route.element />} key={index} />
      ))}
      <Route path="/auth" element={<Navigate to="/feedback" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route path={route.path} element={<route.element />} key={index} />
      ))}
      <Route path="/feedback" element={<Navigate to="/auth" />} />
    </Routes>
  );
};
export default AppRouter;

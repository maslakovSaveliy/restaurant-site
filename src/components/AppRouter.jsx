import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Events from "../pages/Events";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  );
};
export default AppRouter;

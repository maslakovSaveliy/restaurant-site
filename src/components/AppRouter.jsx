import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Events from "../pages/Events";
import Reviews from "../pages/Reviews";
import Error from "../pages/Error";
const AppRouter = ({ setModalState }) => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route
        path="/events"
        element={<Events setModalState={setModalState} />}
      />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};
export default AppRouter;

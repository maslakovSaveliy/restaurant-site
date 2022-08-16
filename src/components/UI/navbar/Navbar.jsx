import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../../context/Context";
import MyButton from "../button/MyButton";
const Navbar = ({ setModalState }) => {
  const { setIsAuth } = useContext(Context);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className="navbar">
      <div className="navbar__content">
        <div className="navbar__item">
          <img className="logo" src="/images/pizza.png" alt="logo" />
        </div>
        <div className="navbar__item">
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "white" : "gray" })}
          >
            About
          </NavLink>
        </div>
        <div className="navbar__item">
          <NavLink
            to="/menu"
            style={({ isActive }) => ({ color: isActive ? "white" : "gray" })}
          >
            Menu
          </NavLink>
        </div>
        <div className="navbar__item">
          <NavLink
            to="/events"
            style={({ isActive }) => ({ color: isActive ? "white" : "gray" })}
          >
            Events
          </NavLink>
        </div>
        <div className="navbar__item">
          <NavLink
            to="/reviews"
            style={({ isActive }) => ({ color: isActive ? "white" : "gray" })}
          >
            Reviews
          </NavLink>
        </div>
        <div className="navbar__item">
          <MyButton onClick={logout}>Log out</MyButton>
        </div>
      </div>
      <button
        className="navbar__item booking"
        onClick={() => setModalState(true)}
      >
        Book a table
      </button>
    </div>
  );
};
export default Navbar;

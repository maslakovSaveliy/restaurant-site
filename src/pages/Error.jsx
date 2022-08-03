import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div style={{ color: "red", height: "100vh" }}>
      Wrong URL. <Link to="/">Home page</Link>
    </div>
  );
};
export default Error;

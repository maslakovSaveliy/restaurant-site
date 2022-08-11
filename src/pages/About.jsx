import React from "react";
import "../styles/App.css";
const About = () => {
  return (
    <div className="about" style={{ minHeight: "100vh" }}>
      <img
        className="restaurant__img"
        src="/images/main-interior.webp"
        alt="restaurant inside"
      />
      <h1>Hello</h1>
      <h2>This is our restaurant. We hope you will be happy!</h2>
    </div>
  );
};
export default About;

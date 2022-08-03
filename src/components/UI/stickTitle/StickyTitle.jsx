import React from "react";
import "./StickyTitle.modal.css";
const StickyTitle = ({ children }) => {
  return (
    <div className="fixed">
      <h1>{children}</h1>
    </div>
  );
};
export default StickyTitle;

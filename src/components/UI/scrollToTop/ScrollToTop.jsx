import React from "react";
import { BiArrowFromBottom } from "react-icons/bi";
const ScrollToTop = ({ cl }) => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={scrollToTop} className={cl}>
      <BiArrowFromBottom />
    </div>
  );
};
export default ScrollToTop;

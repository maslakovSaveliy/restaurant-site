import React from "react";
import cl from "./Modal.module.css";
const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.modal];
  if (visible) {
    rootClasses.push(cl.active);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div onClick={(e) => e.stopPropagation()} className={cl.modalContent}>
        {children}
      </div>
    </div>
  );
};
export default Modal;

import React from "react";
import { CSSTransition } from "react-transition-group";
const Modal = ({ children, visible, setVisible }) => {
  return (
    <CSSTransition in={visible} mountOnEnter unmountOnExit timeout={500}>
      <div className="modal" onClick={() => setVisible(false)}>
        <div onClick={(e) => e.stopPropagation()} className="modalContent">
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};
export default Modal;

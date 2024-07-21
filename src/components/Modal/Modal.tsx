import React from "react";
import classes from "./Modal.module.css";

const Modal = (props: any) => {
  const { children, isOpen = true, onToggle } = props;

  return (
    <div
      className={`${classes.modal} flex flex-col-vertical-center ${
        isOpen ? classes.open : ""
      }`}
    >
      <div className={classes["modal-content"]}>
        <div
          className={`${classes.closeicon} flex flex-row-end`}
          onClick={onToggle}
        >
          <img src={'/assets/images/close.svg'}></img>
        </div>
        <div className="width-100">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

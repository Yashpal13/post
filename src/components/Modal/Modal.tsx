import React from "react";
import classes from "./Modal.module.css";

interface Args {
  children: React.ReactNode;
  onToggle: React.MouseEventHandler;
  isOpen?: Boolean;
}

const Modal = (props: Args) => {
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
          <img src={"/assets/images/close.svg"} alt="close"></img>
        </div>
        <div className="width-100">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

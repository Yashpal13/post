import React from "react";
import classes from "./Modal.module.css";
import close from "../../assets/images/close.svg";

const Modal = (props: any) => {
  const { children, isOpen = true } = props;

  const onClose = () => {};

  return (
    <div
      className={`${classes.modal} flex flex-col-vertical-center ${
        isOpen ? classes.open : ""
      }`}
    >
      <div className={classes["modal-content"]}>
        <div className={`${classes.closeicon} flex flex-row-end`}>
          <img src={close}></img>
        </div>
        <div className="width-100">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

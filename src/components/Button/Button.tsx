import React from "react";
import classes from "./Button.module.css";

const Button = (props: any) => {
  const { title, onClick } = props;
  return (
    <div className={classes.btn} onClick={onClick}>
      {title}
    </div>
  );
};

export default Button;

import React from "react";
import classes from "./Button.module.css";

const Button = (props: any) => {
  const { title } = props;
  return <div className={classes.btn}>{title}</div>;
};

export default Button;

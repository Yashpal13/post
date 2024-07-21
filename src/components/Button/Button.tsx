import React from "react";
import classes from "./Button.module.css";

interface Args {
  text: string;
  onClick: React.MouseEventHandler;
}

const Button = (props: Args) => {
  const { text, onClick } = props;
  return (
    <div className={`${classes.btn} font-500`} onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;

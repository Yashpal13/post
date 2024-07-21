import React from "react";
import classes from "./Button.module.css";

interface Args {
  title: string;
  onClick: React.MouseEventHandler;
}

const Button = (props: Args) => {
  const { title, onClick } = props;
  return (
    <div className={`${classes.btn} font-500`} onClick={onClick}>
      {title}
    </div>
  );
};

export default Button;

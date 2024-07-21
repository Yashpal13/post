import React from "react";
import classes from "./Card.module.css";

interface Args {
  children: React.ReactNode;
}

const Card = (props: Args) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;

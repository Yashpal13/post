import React from "react";
import classes from "./Emoji.module.css";

const Emoji = (props: any) => {
  const { image } = props;

  return (
    <div className={classes["comment-image"]}>
      <img className={classes.icon} src={image}></img>
    </div>
  );
};

export default Emoji;

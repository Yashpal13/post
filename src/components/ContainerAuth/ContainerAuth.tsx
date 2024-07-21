import React from "react";
import classes from "./ContainerAuth.module.css";

interface Args {
  children: JSX.Element | JSX.Element[];
}

const ContainerAuth = (props: Args) => {
  return (
    <div className="flex flex-col-vertical-center height-100">
      <div className={classes.container}>{props.children}</div>
    </div>
  );
};

export default ContainerAuth;

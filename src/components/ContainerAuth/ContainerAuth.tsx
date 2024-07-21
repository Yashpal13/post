import React from "react";
import classes from "./ContainerAuth.module.css";

const ContainerAuth = (props: any) => {
  return (
    <div className="flex flex-col-vertical-center height-100">
      <div style={{ width: "50%", maxWidth: "450px" }}>{props.children}</div>
    </div>
  );
};

export default ContainerAuth;

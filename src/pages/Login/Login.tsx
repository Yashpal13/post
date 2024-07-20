import React, { useState } from "react";
import classes from "./Login.module.css";
import Button from "../../components/Button/Button";
import Logo from "../../assets/images/Logo.svg";

const Login = (props: any) => {
  const { title = "WELCOME BACK", description = "Log into your account" } =
    props;

  const [data, setData] = useState<any>({
    email: "",
    password: "",
  });

  const setFormValue = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col-vertical-center height-100">
      <img src={Logo} className={classes.logo} />
      <div className={classes.container}>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{description}</div>
        <div className={classes["input-container"]}>
          <div className={classes.label}>Email or Username</div>
          <input
            type="text"
            className={classes.input}
            onChange={(e: any) => setFormValue(e)}
            placeholder="Enter your email or username"
          ></input>
        </div>
        <div className={classes["input-container"]}>
          <div className={classes.label}>Password</div>
          <input
            type="text"
            className={classes.input}
            onChange={(e: any) => setFormValue(e)}
            placeholder="Enter your password"
          ></input>
        </div>
        <Button title="Login now" />
        <div className={classes.registertext}>
          Not registered yet? Register →
        </div>
      </div>
    </div>
  );
};

export default Login;

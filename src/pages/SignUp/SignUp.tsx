import React, { useState } from "react";
import classes from "./SignUp.module.css";
import Button from "../../components/Button/Button";

const SignUp = (props: any) => {
  const { title = "SIGN UP", description = "Create an account to continue" } =
    props;

  const [data, setData] = useState<any>({
    email: "",
    username: "",
    password: "",
  });

  const setFormValue = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col-vertical-center height-100 width-100">
      <div className={`${classes.container} width-100`}>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{description}</div>
        <div className={classes["input-container"]}>
          <div className={classes.label}>Email</div>
          <input
            type="text"
            className={classes.input}
            onChange={(e: any) => setFormValue(e)}
            placeholder="Enter your email"
          ></input>
        </div>
        <div className={classes["input-container"]}>
          <div className={classes.label}>Username</div>
          <input
            type="text"
            className={classes.input}
            onChange={(e: any) => setFormValue(e)}
            placeholder="Choose a preferred username"
          ></input>
        </div>
        <div className={classes["input-container"]}>
          <div className={classes.label}>Password</div>
          <input
            type="text"
            className={classes.input}
            onChange={(e: any) => setFormValue(e)}
            placeholder="Choose a strong password"
          ></input>
        </div>
        <Button title="Continue" />
        <div className={classes.registertext}>
          Already have an account? Login →
        </div>
      </div>
    </div>
  );
};

export default SignUp;

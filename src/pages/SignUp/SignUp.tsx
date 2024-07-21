import React, { useState } from "react";
import classes from "./SignUp.module.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";

interface Args {
  title: string;
  description: string;
  isModal?: Boolean;
}

const SignUp = (props: Args) => {
  const { isModal = false, title, description } = props;
  const [data, setData] = useState<any>({
    email: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const context: any = useAuth();
  const [error, setError] = useState<any>({});
  const setFormValue = (e: any) => {
    setError({});
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const error: any = {};
    if (!data.email.length) {
      error.email = "Email is required !!";
    }

    if (!data.password.length) {
      error.password = "Password is required !!";
    }

    if (!data.username.length) {
      error.username = "Username is required !!";
    }
    return error;
  };

  const onSubmit = () => {
    const error = validateForm();
    setError(error);
    if (Object.keys(error).length == 0) {
      if (!isModal) {
        navigate("/login");
      } else {
        context.dispatch({ type: "login", payload: true });
      }
    }
  };

  const onLogin = () => {
    if (!isModal) {
      navigate("/login");
    } else {
      context.dispatch({ type: "login", payload: true });
    }
  };

  return (
    <div className="flex flex-col-vertical-center height-100 width-100">
      {!isModal && (
        <img
          src={"/assets/images/Logo.svg"}
          className={classes.logo}
          alt="logo"
        />
      )}
      <div
        className={`${classes.container} width-100 ${
          isModal ? classes.modalcontainer : null
        }`}
      >
        <div className={`${classes.title} font-500`}>{title}</div>
        <div className={`${classes.description} font-600`}>{description}</div>
        <div className={classes["input-container"]}>
          <div className={`${classes.label} font-500`}>Email</div>
          <input
            type="text"
            className={classes.input}
            onChange={(e: any) => setFormValue(e)}
            placeholder="Enter your email"
            name="email"
          ></input>
          {error.email && <span className={classes.error}>{error.email}</span>}
        </div>
        <div className={classes["input-container"]}>
          <div className={`${classes.label} font-500`}>Username</div>
          <input
            type="text"
            className={classes.input}
            onChange={(e: any) => setFormValue(e)}
            placeholder="Choose a preferred username"
            name="username"
          ></input>
          {error.username && (
            <span className={classes.error}>{error.username}</span>
          )}
        </div>
        <div className={classes["input-container"]}>
          <div className={`${classes.label} font-500`}>Password</div>
          <input
            type="text"
            className={classes.input}
            onChange={(e: any) => setFormValue(e)}
            placeholder="Choose a strong password"
            name="password"
          ></input>
          {error.password && (
            <span className={classes.error}>{error.password}</span>
          )}
        </div>
        <Button text="Continue" onClick={onSubmit} />
        <div className={`${classes.registertext} font-500`}>
          Already have an account?{" "}
          <span onClick={onLogin} className={classes.logintext}>
            Login →
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

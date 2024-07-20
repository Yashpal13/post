import React, { useState } from "react";
import classes from "./Login.module.css";
import Button from "../../components/Button/Button";
import Logo from "../../assets/images/Logo.svg";
import Eye from "../../assets/images/eye.svg";
import { useNavigate } from "react-router-dom";

const Login = (props: any) => {
  const {
    title = "WELCOME BACK",
    description = "Log into your account",
    showLogo = true,
  } = props;

  const [data, setData] = useState<any>({
    user: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();

  const setFormValue = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = () => {
    navigate('/post')
  };

  return (
    <div className="flex flex-col-vertical-center height-100 width-100">
      {showLogo && <img src={Logo} className={classes.logo} />}
      <div className={`${classes.container} width-100`}>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{description}</div>
        <div className={classes["input-container"]}>
          <div className={classes.label}>Email or Username</div>
          <input
            type="text"
            className={classes.input}
            onChange={(e: any) => setFormValue(e)}
            placeholder="Enter your email or username"
            name="user"
          ></input>
        </div>
        <div className={classes["input-container"]}>
          <div className="flex flex-row-space-between">
            <div className={classes.label}>Password</div>
            <div className={classes.forgetlabel}>Forgot password?</div>
          </div>
          <div className={classes["password-input"]}>
            <input
              type="text"
              className={classes.input}
              onChange={(e: any) => setFormValue(e)}
              placeholder="Enter your password"
              name="password"
            ></input>
            <img
              src={Eye}
              className={classes.passwordicon}
              onClick={toggleVisibility}
            ></img>
          </div>
        </div>
        <Button title="Login now" onClick={onSubmit} />
        <div className={classes.registertext}>
          Not registered yet? Register →
        </div>
      </div>
    </div>
  );
};

export default Login;

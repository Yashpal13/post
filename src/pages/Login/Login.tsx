import React, { useState } from "react";
import classes from "./Login.module.css";
import Button from "../../components/Button/Button";
import Logo from "../../assets/images/Logo.svg";
import Eye from "../../assets/images/eye.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../App";

const Login = (props: any) => {
  const { title, description, isModal = false } = props;
  const [data, setData] = useState<any>({
    user: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();
  const context: any = useAuth();

  const setFormValue = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = () => {
    if (isModal) {
      context.dispatch({ type: "login", payload: false });
    } else {
      navigate("/post");
    }
  };

  const signUp = () => {
    if (isModal) {
      context.dispatch({ type: "signup", payload: true });
    } else {
      navigate("/sign-up");
    }
  };

  return (
    <div className="flex flex-col-vertical-center height-100 width-100">
      {!isModal && <img src={Logo} className={classes.logo} />}
      <div
        className={`${classes.container} width-100  ${
          isModal ? classes.modalcontainer : null
        }`}
      >
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
              value={
                showPassword ? data.password : "*".repeat(data.password.length)
              }
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
          Not registered yet?{" "}
          <span onClick={signUp} className={classes.signuptext}>
            Register →
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import classes from "./Login.module.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";

interface Args {
  title: string;
  description: string;
  isModal?: Boolean;
}

const Login = (props: Args) => {
  const { title, description, isModal = false } = props;
  const [data, setData] = useState<{ user: string; password: string }>({
    user: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<Boolean>(true);
  const navigate = useNavigate();
  const context: any = useAuth();
  const [error, setError] = useState<any>({});

  const setFormValue = (e: any) => {
    setError({});
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const validateForm = (data: any) => {
    const error: any = {};
    if (!data.user.length) {
      error.user = "Email/Username is required !!";
    }

    if (!data.password.length) {
      error.password = "Password is required !!";
    }
    return error;
  };

  const onSubmit = () => {
    const error = validateForm(data);
    setError(error);
    if (Object.keys(error).length == 0) {
      if (isModal) {
        context.dispatch({ type: "login", payload: false });
      } else {
        navigate("/post");
      }
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
      {!isModal && (
        <img
          src={"/assets/images/Logo.svg"}
          className={classes.logo}
          alt="logo"
        />
      )}
      <div
        className={`${classes.container} width-100  ${
          isModal ? classes.modalcontainer : null
        }`}
      >
        <div className={`${classes.title} font-500`}>{title}</div>
        <div className={`${classes.description} font-600`}>{description}</div>
        <div className={classes["input-container"]}>
          <div className={`${classes.label} font-500`}>Email or Username</div>
          <input
            type="text"
            className={classes.input}
            onChange={(e: any) => setFormValue(e)}
            placeholder="Enter your email or username"
            name="user"
          ></input>
          {error.user && <span className={classes.error}>{error.user}</span>}
        </div>
        <div className={classes["input-container"]}>
          <div className="flex flex-row-space-between">
            <div className={`${classes.label} font-500`}>Password</div>
            <div className={`${classes.forgetlabel} font-500`}>
              Forgot password?
            </div>
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
            {error.password && (
              <span className={classes.error}>{error.password}</span>
            )}
            <img
              src={"/assets/images/eye.svg"}
              className={classes.passwordicon}
              onClick={toggleVisibility}
              alt="show/hide password"
            ></img>
          </div>
        </div>
        <Button text="Login now" onClick={onSubmit} />
        <div className={`${classes.registertext} font-500`}>
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

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

  const setFormValue = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (!isModal) {
      navigate("/login");
    } else {
      context.dispatch({ type: "login", payload: true });
    }
  };

  return (
    <div className="flex flex-col-vertical-center height-100 width-100">
      {!isModal && (
        <img src={"/assets/images/Logo.svg"} className={classes.logo} />
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
          ></input>
        </div>
        <div className={classes["input-container"]}>
          <div className={`${classes.label} font-500`}>Username</div>
          <input
            type="text"
            className={classes.input}
            onChange={(e: any) => setFormValue(e)}
            placeholder="Choose a preferred username"
          ></input>
        </div>
        <div className={classes["input-container"]}>
          <div className={`${classes.label} font-500`}>Password</div>
          <input
            type="text"
            className={classes.input}
            onChange={(e: any) => setFormValue(e)}
            placeholder="Choose a strong password"
          ></input>
        </div>
        <Button text="Continue" onClick={onSubmit} />
        <div className={`${classes.registertext} font-500`}>
          Already have an account?{" "}
          <span onClick={onSubmit} className={classes.logintext}>
            Login →
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

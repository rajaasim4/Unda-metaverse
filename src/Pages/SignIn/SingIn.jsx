import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Wave from "../../assets/Images/Wave.png";
import Input from "../../Components/Input/Input";
import "./SignIn.css";
const SignIn = () => {
  let navigate = useNavigate();
  let HomepageNavigation = () => {
    alert("You are Signing without password and email");
    navigate("/");
  };
  return (
    <section className="SignIn">
      <nav>
        <div className="nav-Logo">
          <Link to="/">
            <h1>
              UNDA
              <span>.Quest</span>
            </h1>
          </Link>
        </div>
      </nav>

      <div className="SignIn-section">
        <h1>Sign In</h1>
        <p>Sign in and start managing your candidates!</p>
        <div className="SignIn-form">
          <Input type={"text"} name={"Login"} />

          <Input type={"text"} name={"Password"} />

          <div className="form-Checkbox">
            <div className="form-Checkbox-left">
              <input type="checkbox" name="" id="" />
              Remeber me
            </div>
            <div className="form-Checkbox-right">
              <span>Forgot Password?</span>
            </div>
          </div>

          <button onClick={HomepageNavigation}>Sign In</button>
          <p className="Account-info-text">
            Create Account? <Link to="/SignUp">SingUp</Link>
          </p>
        </div>
      </div>
      <div className="SignIn-wave">
        <img src={Wave} alt="" />
      </div>
    </section>
  );
};

export default SignIn;

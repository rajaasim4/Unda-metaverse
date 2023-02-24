import React from "react";
import { Link } from "react-router-dom";
import Wave from "../../assets/Images/Wave.png";
import Input from "../../Components/Input/Input";
import "./SignUp.css";
const SignUp = () => {
  return (
    <section className="SignUp">
      <nav>
        <div className="nav-Logo">
          <h1>
            UNDA
            <span>.Quest</span>
          </h1>
        </div>
      </nav>

      <div className="SignUp-section">
        <h1>Sign Up</h1>
        <p>Sign up and start managing your candidates!</p>
        <div className="SignUp-form">
          <Input type={"text"} name={"Username"} />
          <Input type={"text"} name={"Email"} />
          <Input type={"text"} name={"Password"} />
          <Input type={"text"} name={"Confirm Password"} />
          <div className="form-Checkbox">
            <div className="form-Checkbox-left">
              <input type="checkbox" name="" id="" />
              Remeber me
            </div>
            <div className="form-Checkbox-right">
              <span>Forgot Password?</span>
            </div>
          </div>
          <button>Register</button>
          <p className="Account-info-text">
            Already have an Account want to?
            <Link to="/SignIn"> SignIn</Link>
          </p>
        </div>
      </div>
      <div className="SignUp-wave">
        <img src={Wave} alt="" />
      </div>
    </section>
  );
};

export default SignUp;

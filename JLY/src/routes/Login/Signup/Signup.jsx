import { Fragment } from "react";
import { Link } from "react-router-dom";
import "../Login.css";
const Signup = (props) => {
  return (
    <Fragment>
      <main className="login-layout-flow">
        <div className="login-wrapper">
          <a href={"/login"}>
            <p className="text-xs page-change">Login</p>
          </a>
          <div className="login-info-box">
            <h2 className="text-xl login-title">Sign Up</h2>
            <p>Sign up below to save your work.</p>
          </div>
          <div className="provider-container">
            <button className="provider">Continue with Google</button>
            <button className="provider">Continue with Github</button>
          </div>
          {/* <hr /> */}
          <p className="text-xs credentials-info">Sign in using credentials</p>
          <input className="login-form-input" placeholder="Enter Email" />
          <input className="login-form-input" placeholder="Enter Password" />
          <button className="text-sm sign-button">Sign in</button>
        </div>
      </main>
    </Fragment>
  );
};

export default Signup;

import React from "react";
import "../styles/SignIn.css";
import { useRef } from "react";

function SignUp({ setIsSignUp, isSignUp, SignUpInLogin }) {
  const SignUpBackEl = useRef(null);

  const SignUpCloseHander = (e) => {
    if (e.target === SignUpBackEl.current) {
      setIsSignUp(!isSignUp);
    }
  };
  return (
    <div
      className="SignUp"
      ref={SignUpBackEl}
      onClick={(e) => SignUpCloseHander(e)}
    >
      <div className="SignIn_in">
        <div className="SignIn_title">Sign Up</div>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="password" />
        <span className="SignUp_forgot_checkbox">
          <input type="checkbox" />
          <label>I Agree with</label>
          <span>privacy</span>
          <label>and</label>
          <span>policy</span>
        </span>
        <button className="SignIn_button">Sign up</button>
        <div className="SignUp_login">
          <span>Already have an account?</span>
          <span onClick={() => SignUpInLogin()}>Sign In</span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";

function Headerwhite({ isOn, toggleHandler }) {
  return (
    <header id={isOn ? "header" : "header_change"}>
      <div id="header_in">
        <div id="header_front">
          <Link to="/">
            <span id={isOn ? "header_logo" : "header_logo_change"}>
              WATFLIX
            </span>
          </Link>
          <span id="header_toggle">
            <Toggle isOn={isOn} toggleHandler={toggleHandler} />
          </span>
          {/* <span className="close">+</span> */}
        </div>

        <div id="header_back">
          <Link to="/login">
            <span id={isOn ? "header_SignIn" : "header_SignIn_change"}>
              로그인
            </span>
          </Link>
          <Link to="/signUp">
            <span id={isOn ? "header_SignUp" : "header_SignUp_change"}>
              회원가입
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Headerwhite;

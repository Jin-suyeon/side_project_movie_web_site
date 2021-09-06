import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import "../styles/SignIn.css";

function SignIn({ setIsLogin, isLogin, LoginInSignUp }) {
  const loginBackEl = useRef(null);

  const loginCloseHander = (e) => {
    if (e.target === loginBackEl.current) {
      setIsLogin(!isLogin);
    }
  };

  return (
    <div
      className="SignIn"
      ref={loginBackEl}
      onClick={(e) => loginCloseHander(e)}
    >
      <div className="SignIn_in">
        <div className="SignIn_title">Log In</div>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <div className="SignIn_forgot">
          <span className="SignIn_forgot_checkbox">
            <input type="checkbox" />
            <label>Remember me</label>
          </span>
          <span className="SignIn_forgot_password">Forgot Password</span>
        </div>
        <button className="SignIn_button">Log In</button>
        <div className="SignIn_sub_text">Or Sign in with</div>
        <div className="SignIn_icon_container">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faGoogle} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="SignIn_signup">
          <span>Don't have an account?</span>
          <span onClick={() => LoginInSignUp()}>Sign up</span>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

// /* eslint-disable */
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SigIn";

function App() {
  //! state
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isOn, setisOn] = useState(false);

  //! useEffect
  useEffect(() => {
    scrollStop();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    scrollStop();
    // eslint-disable-next-line
  }, [isLogin, isSignUp, isLoading]);

  // //! 함수
  const scrollStop = () => {
    isLogin || isSignUp || isLoading
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  };

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  const LoginInSignUp = () => {
    setIsSignUp(true);
    setIsLogin(false);
  };

  const SignUpInLogin = () => {
    setIsLogin(true);
    setIsSignUp(false);
  };

  //! 리턴
  return (
    <BrowserRouter>
      {isLoading ? <Loading /> : null}

      {isSignUp ? (
        <SignUp
          SignUpInLogin={SignUpInLogin}
          isSignUp={isSignUp}
          setIsSignUp={setIsSignUp}
        />
      ) : null}

      {isLogin ? (
        <SignIn
          LoginInSignUp={LoginInSignUp}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      ) : null}

      <Header
        isOn={isOn}
        toggleHandler={toggleHandler}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        isSignUp={isSignUp}
        setIsSignUp={setIsSignUp}
        LoginInSignUp={LoginInSignUp}
        SignUpInLogin={SignUpInLogin}
      />

      <Switch>
        <Route exact path="/">
          <Main isOn={isOn} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

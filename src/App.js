// /* eslint-disable */
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import { useEffect, useState } from "react";
import SignIn from "./pages/SigIn";
import Loading from "./components/Loading";

// import Loading from "./components/Loading";

function App() {
  // 로그인 스테이트
  const [isLogin, setIsLogin] = useState(false);
  // 회원가입 스테이트
  const [isSignUp, setIsSignUp] = useState(false);
  // 로딩 스테이트
  const [isLoading, setIsLoading] = useState(true);
  // 토글 버튼
  const [isOn, setisOn] = useState(false);

  useEffect(() => {
    scrollStopLoading();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    scrollStopLogin();
    // eslint-disable-next-line
  }, [isLogin]);

  useEffect(() => {
    scrollStopLoading();
    // eslint-disable-next-line
  }, [isLoading]);

  useEffect(() => {
    scrollStopSignUp();
    // eslint-disable-next-line
  }, [isSignUp]);

  const scrollStopLogin = () => {
    isLogin
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  };

  const scrollStopSignUp = () => {
    isSignUp
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  };

  //! 로딩중일 때는 스크롤 안되게, 로딩 끝나면 스크롤이 되게하는 함수
  const scrollStopLoading = () => {
    isLoading
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
      />

      <Switch>
        <Route exact path="/">
          <Main isOn={isOn} />
        </Route>

        {/* <Route exact path="/login">
          <SigIn />
        </Route> */}

        <Route exact path="/signUp">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

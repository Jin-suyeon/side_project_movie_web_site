// /* eslint-disable */
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import SiginIn from "./pages/SiginIn";
import SignUp from "./pages/SignUp";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  //! 토글 버튼
  const [isOn, setisOn] = useState(false);

  console.log(isOn);

  useEffect(() => {
    scrollStop();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    scrollStop();
  }, [isLoading]);

  //! 로딩중일 때는 스크롤 안되게, 로딩 끝나면 스크롤이 되게하는 함수
  const scrollStop = () => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    }
    if (!isLoading) {
      document.body.style.overflow = "unset";
    }
  };

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <BrowserRouter>
      {isLoading ? <Loading /> : null}

      <Header isOn={isOn} toggleHandler={toggleHandler} />

      <Switch>
        <Route exact path="/">
          <Main isOn={isOn} />
        </Route>

        <Route exact path="/login">
          <SiginIn />
        </Route>

        <Route exact path="/signUp">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

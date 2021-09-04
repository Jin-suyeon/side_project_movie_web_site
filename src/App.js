import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import SiginIn from "./pages/SiginIn";
import SignUp from "./pages/SignUp";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(true);
  //   }, 3000);
  // }, []);

  return (
    <BrowserRouter>
      <Header />
      {/* {isLoading ? <Header /> : null} */}
      <Switch>
        <Route exact path="/">
          <Main />
          {/* {isLoading ? <Main /> : <Loading />} */}
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

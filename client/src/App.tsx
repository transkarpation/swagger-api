import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Signin from "./pages/auth/signin";
import Signup from "./pages/auth/signup";


function App() {
  return (
    <div className="App container">
      <Router>
        <TopNav></TopNav>
        <div className="row-3">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

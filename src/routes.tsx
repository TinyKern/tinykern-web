import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinyKernel from "./components/tinykernel";
import Navbar from "./components/navbar";
import Home from "./components/home";

function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tinykernel" component={TinyKernel} />
        <Route
          exact
          path="/tinykernel/readme"
          component={() => (
            <h1>
              Redirecting to{" "}
              {
                (window.location.href =
                  "https://github.com/TinyKern/TinyKernel/blob/master/README.md")
              }
            </h1>
          )}
        ></Route>
      </Switch>
    </Router>
  );
}

export default Routes;

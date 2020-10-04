import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Donate from "./components/Donate";
import Form from "./components/Form";

import { GlobalProvider } from "./context/GlobalState";
import "./scss/App.scss";

export default class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <div className="container">
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={Profile} />
              <Route path="/addnew" component={Form} />
              <Route path="/donate" component={Donate} />
            </Switch>
          </Router>
        </div>
      </GlobalProvider>
    );
  }
}

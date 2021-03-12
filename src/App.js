import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from './SendMail'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <EmailList />
            </Route>
            <Route path="/mail">
              <Mail />
            </Route>
          </Switch>
        </div>
        <SendMail />
      </div>
    </Router>
  );
}

export default App;

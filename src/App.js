import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Routs/Home";
import Doctor from "./Routs/Doctor";
import Login from "./Routs/Login";
import SignUp from "./Routs/SignUp";
import NewPatient from "./Routs/NewPatient";
import Patient from "./Routs/Patient";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/doctor" exact>
            <Doctor />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>

          <Route path="/newPatient" exact>
            <NewPatient />
          </Route>
          <Route path="/Patient" exact>
            <Patient />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;

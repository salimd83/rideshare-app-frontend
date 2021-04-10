import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import logoImg from "./assets/images/logo.png";
import Home from "./pages/Home";
import Container from "./components/Container";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Container>
            <img src={logoImg} alt="Rideshare app logo" />
          </Container>
        </header>
        <main>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

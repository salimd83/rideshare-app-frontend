import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import logoImg from "./assets/images/logo.png";
import Home from "./pages/Home";
import Container from "./components/Container";
import Register from "./pages/Register";
import Verify from "./pages/Verify";
import { AuthProvider } from "./contexts/auth";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <header>
            <Container>
              <img src={logoImg} alt="Rideshare app logo" />
            </Container>
          </header>
          <main>
            <Switch>
              <PublicRoute path="/register"><Register /></PublicRoute>
              <PrivateRoute path="/verify"><Verify /></PrivateRoute>
              <PublicRoute path="/signin"><Signin /></PublicRoute>
              <PrivateRoute path="/dashboard"><Dashboard /></PrivateRoute>
              <PublicRoute path="/"><Home /></PublicRoute>
            </Switch>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

import React from "react";
import "./App.css";
import logoImg from "./assets/images/logo.png";
import Home from "./pages/Home";
import Container from "./components/Container";

function App() {
  return (
    <div className="app">
      <header>
        <Container>
          <img src={logoImg} alt="Rideshare app logo" />
        </Container>
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;

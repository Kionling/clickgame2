import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import CardDesign from "./components/cardDesign"
import Navbar from "./components/navbar";
import Score from "./components/score";
// import GameRules from "./components/gamerules"
import Jumbotron from "./components/jumbotron";
import Footer from "./components/footer"

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Score />
      <Footer />
    </div>
  );
}

export default App;

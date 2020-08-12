import React from 'react';
import logo from './logo.svg';
import './App.css';
// import CardDesign from "./components/cardDesign"
import Navbar from "./components/navbar"
import Score from "./components/score"
// import GameRules from "./components/gamerules"

function App() {
  return (
    <div>
    <Navbar />
    <Score />
    </div>
  );
}

export default App;

import React from "react";
import CardDesign from "./cardDesign";
import Navbar from "./navbar";
import Images from "../img.json";
import Score from "./score";
import Footer from "./footer";
import Jumbotron from "./jumbotron";

class App extends React.Component {
  //need state
  state = {
    Images: [],
    clicks: [],
    score: 0,
    topScore: 0,
  };

  //need counter
//   counter() {}
  //conditionals for click images

  //how to track images

  //need tracker for image clicks
  //need image randomizer
//   random() {
//     const image = this.state.images;
//     this.setState({
//       images: image.map((randomImg) => {
//         if (Math.random() > 1) {
//           return 2;
//         }
//         if (Math.random() < 1) {
//           return -2;
//         } else {
//           return 0;
//         }
//       }),
//     });
//   }

  //need renderer FOR NEW component states

}
export default App;

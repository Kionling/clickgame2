import React from "react";
import CardDesign from "./cardDesign";
import Navbar from "./navbar";
import Images from "../img.json";
import Score from "./score";
// import Footer from "./footer";
// import Jumbotron from "./jumbotron";

class App extends React.Component {
  //need state
  state = {
    CardImages: [],
    clicks: [],
    score: 0,
    topScore: 0,
  };

  //need counter
  counter = (images) => {
      if(this.state.clicks.indexOf(images) === -1 ){
          this.setState({
              score: this.state.score + 1
          })
      } else {
          console.log("farley")
      }
  }
  //conditionals for click images

  //how to track images

  //need tracker for image clicks
  //need image randomizer
  random = () =>  {
    const image = this.state.CardImages;
    this.setState({
      Images: image.map((randomImg) => {
          let random = Math.random()
        if (random > .5) {
          return 1;
        }
        if (random < .5) {
          return -1;
        } else {
          return 0;
        }
      }),
    });
  }


  componentDidMount()
  {
    this.setState({ Images });
  }
  //need renderer FOR NEW component states
  render() {
    return (
    <div>
       
        <Score score={this.state.score} />
        <div className="container">
          {Images.map(CardD => (
            <CardDesign key={CardD.id}id={CardD.id} image={CardD.image} random={this.random} counter={this.counter}/>
          ))}
        </div>
    </div>   
    )
}
}

export default App;

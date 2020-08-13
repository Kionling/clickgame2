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
    CardImages: [],
    clicks: [],
    score: 0,
    topScore: 0,
  };

  //need counter
  counter = (images) => {
      if(this.state.clicks.indexOf(images) === -1 ){
          this.setState({
              clicks: [...this.state.clicks, images],
              score: this.state.score + 1,
              topScore: this.state.score
          })
      } else {
          console.log("farley")
            this.setState({score: 0})
            this.setState({clicks: []})
            this.setState({topScore: this.state.score})
      }
  }
  //conditionals for click images

  //how to track images

  //need tracker for image clicks
  //need image randomizer
  random = () =>  {
    const image = this.state.Images;
    this.setState({
      CardImages: image.sort(randomImg => {
          const random = Math.random()
        if (random > .1) {
          return 1;
        }
        if (random < .1) {
          return -1;
        } else {
          return 0;
        }
      }),
    });
  }

  topScore = () => {
      if(this.state.score > this.state.topScore){
    this.setState({
        topScore: this.state.score
    })
}
  }


  componentDidMount()
  {
    this.setState({ Images });
  }
  //need renderer FOR NEW component states
  render() {
      const Styles = {
          space: {
              margin: "4px"
          }
      }
    return (
    <div>
       <Navbar />
       <Jumbotron />
        <Score score={this.state.score} />
        <div className="row" style={Styles.space}>
          {Images.map(CardD => (
            <CardDesign key={CardD.id}id={CardD.id} image={CardD.image} random={this.random} counter={this.counter} topScore={this.topScore}/>
          ))}
        </div>
    </div>   
    )
}
}

export default App;

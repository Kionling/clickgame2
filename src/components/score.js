import React from "react";

const Styles = {
  Score: {
    fontWeight: 900,
  },
};

function Score(props) {
  return (
    <div className="container">
      <h4 style={Styles.Score}>
        Score:<span className={Styles.Score}>{props.score}</span>
        Top Score:<span className={Styles.Score}>{props.topscore}</span>
      </h4>
    </div>
  );
}
export default Score;

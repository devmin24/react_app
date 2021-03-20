import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "르탄이1",
    };
  }

  render() {
    return (
      <div className="App">
        {/* <Start name={this.state.name} /> */}
        {/* <Quiz /> */}
        <Score />
      </div>
    );
  }
}

export default App;

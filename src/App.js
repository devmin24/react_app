import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score";
import { ThemeConsumer } from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "르탄이",
      page: "score",
      list: [
        { question: "르탄이는 1살이다", answer: "O" },
        { question: "르탄이는 2살이다", answer: "O" },
        { question: "르탄이는 3살이다", answer: "O" },
        { question: "르탄이는 4살이다", answer: "O" },
      ],
      scoreMsg: "이 정도면 아주 친한 친구 사이! 앞으로도 더 친하게 지내요! :)",
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.page === "quiz" && <Quiz list={this.state.list} />}
        {this.state.page === "start" && <Start name={this.state.name} />}
        {this.state.page === "score" && (
          <Score name={this.state.name} scoreMsg={this.state.scoreMsg} />
        )}
      </div>
    );
  }
}

export default App;

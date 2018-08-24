import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import VOD from "./VOD.js"

const vods = [
  "https://s3.ap-northeast-2.amazonaws.com/readyq/%5B%EC%A0%9C%ED%92%88%EC%86%8C%EA%B0%9C%5D+%EC%97%94%EB%93%9C%ED%8F%AC%EC%9D%B8%ED%8A%B8+%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88+-+%EC%85%9C%EB%A1%9D%ED%99%88%EC%A6%88+PC%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88.mp4",
  "https://s3.ap-northeast-2.amazonaws.com/readyq/%EA%B0%80%EC%8B%9C%ED%99%94+Flow.mp4",
  "https://s3.ap-northeast-2.amazonaws.com/readyq/%EA%B0%80%EC%8B%9C%ED%99%94+FlowMap.mp4",
  "https://s3.ap-northeast-2.amazonaws.com/readyq/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4+%EC%A0%91%EC%86%8D%EA%B8%B0%EB%A1%9D+%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C.mp4"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. commit test
        </p>
        <VOD src={vods[0]} />
      </div>
    )
  }
}

export default App

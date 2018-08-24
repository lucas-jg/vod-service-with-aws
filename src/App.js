import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

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
        <video id="clip" controls preload="auto" width="640" height="264" data-setup="{}">
          <source
            src="https://s3.ap-northeast-2.amazonaws.com/readyq/%5B%EC%A0%9C%ED%92%88%EC%86%8C%EA%B0%9C%5D+%EC%97%94%EB%93%9C%ED%8F%AC%EC%9D%B8%ED%8A%B8+%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88+-+%EC%85%9C%EB%A1%9D%ED%99%88%EC%A6%88+PC%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    )
  }
}

export default App

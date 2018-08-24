import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import VOD from "./VOD.js"

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
    vodInfo: [
      {
        title: "정보보안 소개영상",
        src:
          "https://s3.ap-northeast-2.amazonaws.com/readyq/%5B%EC%A0%9C%ED%92%88%EC%86%8C%EA%B0%9C%5D+%EC%97%94%EB%93%9C%ED%8F%AC%EC%9D%B8%ED%8A%B8+%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88+-+%EC%85%9C%EB%A1%9D%ED%99%88%EC%A6%88+PC%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88.mp4"
      },
      {
        title: "가시화 Flow",
        src: "https://s3.ap-northeast-2.amazonaws.com/readyq/%EA%B0%80%EC%8B%9C%ED%99%94+Flow.mp4"
      }
    ]
  }

  componentWillMount() {
    console.log("Component Will Mount 1")
  }

  componentDidMount() {
    console.log("Component Did Mount 3")
    setTimeout(() => {
      this.setState({
        vodInfo: [
          ...this.state.vodInfo,
          {
            title: "개인정보 접속기록 대시보드",
            src:
              "https://s3.ap-northeast-2.amazonaws.com/readyq/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4+%EC%A0%91%EC%86%8D%EA%B8%B0%EB%A1%9D+%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C.mp4"
          },
          {
            title: "가시화 flowMap",
            src:
              "https://s3.ap-northeast-2.amazonaws.com/readyq/%EA%B0%80%EC%8B%9C%ED%99%94+FlowMap.mp4"
          }
        ]
      })
    }, 5000)
  }

  render() {
    console.log("Component Render 2")
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to VOD service with AmazonS3</h1>
        </header>
        {this.state.vodInfo.map((vod, index) => {
          return <VOD title={vod.title} src={vod.src} key={index} />
        })}
      </div>
    )
  }
}

export default App

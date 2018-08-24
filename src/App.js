import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import VOD from "./VOD.js"
import InfiniteScroll from "react-infinite-scroll-component"

const vodInfo = [
  {
    title: "정보보안 소개영상",
    src:
      "https://s3.ap-northeast-2.amazonaws.com/readyq/%5B%EC%A0%9C%ED%92%88%EC%86%8C%EA%B0%9C%5D+%EC%97%94%EB%93%9C%ED%8F%AC%EC%9D%B8%ED%8A%B8+%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88+-+%EC%85%9C%EB%A1%9D%ED%99%88%EC%A6%88+PC%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88.mp4"
  },
  {
    title: "가시화 Flow",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/%EA%B0%80%EC%8B%9C%ED%99%94+Flow.mp4"
  },
  {
    title: "개인정보 접속기록 대시보드",
    src:
      "https://s3.ap-northeast-2.amazonaws.com/readyq/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4+%EC%A0%91%EC%86%8D%EA%B8%B0%EB%A1%9D+%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C.mp4"
  },
  {
    title: "가시화 flowMap",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/%EA%B0%80%EC%8B%9C%ED%99%94+FlowMap.mp4"
  },
  {
    title: "finshot.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/finshot.mp4"
  },
  {
    title: "finshot_3.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/finshot_3.mp4"
  },
  {
    title: "finshot_4.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/finshot_4.mp4"
  },
  {
    title: "finshot_7.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/finshot_7.mp4"
  },
  {
    title: "bid",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/bid.mp4"
  },
  {
    title: "-LJHvqpY2YBbTuVpF4SY.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/-LJHvqpY2YBbTuVpF4SY.mp4"
  },
  {
    title: "-LItDcleC7zqZJYzBdRA.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/-LItDcleC7zqZJYzBdRA.mp4"
  },
  {
    title: "-LIniJay7kv4TlyqBzOH.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/-LIniJay7kv4TlyqBzOH.mp4"
  },
  {
    title: "-LIPYAYU8wdszVWXILYQ.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/-LIPYAYU8wdszVWXILYQ.mp4"
  },
  {
    title: "-LIPRAjTPe5UHvKXyp9S.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/-LIPRAjTPe5UHvKXyp9S.mp4"
  },
  {
    title: "-LHHDmQ9aURSE-buwp7t.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/-LHHDmQ9aURSE-buwp7t.mp4"
  },
  {
    title: "-LHGzIbLY6BbcOLz_1it.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/-LHGzIbLY6BbcOLz_1it.mp4"
  },
  {
    title: "-LHGxrjDEb8Gl7UtjDfY.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/-LHGxrjDEb8Gl7UtjDfY.mp4"
  },
  {
    title: "-LHGrKF79yeROFrZWWWt.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/-LHGrKF79yeROFrZWWWt.mp4"
  },
  {
    title: "-LHGbgeDqm-e0JGkt9TL.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/-LHGbgeDqm-e0JGkt9TL.mp4"
  },
  {
    title: "-LHG_bGS5oIiX7jj4LD9.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/-LHG_bGS5oIiX7jj4LD9.mp4"
  },
  {
    title: "-LHGTzt7_Fpij_CXX_UP.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/-LHGTzt7_Fpij_CXX_UP.mp4"
  },
  {
    title: "-LHGTwCkZtdLglZvSTLc.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/-LHGTwCkZtdLglZvSTLc.mp4"
  },
  {
    title: "-LHCNG-pw3CCKH1a_P1F.mp4",
    src: "https://s3.ap-northeast-2.amazonaws.com/readyq/-LHCNG-pw3CCKH1a_P1F.mp4"
  }
]

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
    items: Array.from({ length: 2 })
  }

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 1 }))
      })
    }, 1500)
  }

  componentWillMount() {
    console.log("Component Will Mount 1")
  }

  componentDidMount() {
    console.log("Component Did Mount 3")
  }

  render() {
    console.log("Component Render 2")
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to VOD service with AmazonS3</h1>
        </header>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <VOD title={vodInfo[index].title} src={vodInfo[index].src} key={index} />
          ))}
        </InfiniteScroll>
      </div>
    )
  }
}

export default App

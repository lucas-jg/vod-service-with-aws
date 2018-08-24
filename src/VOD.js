import React, { Component } from "react"
import "./VOD.css"

class VOD extends Component {
  render() {
    return (
      <div className="VOD">
        <p> {this.props.title}</p>
        <video id="clip" controls preload="auto" data-setup="{}">
          <source src={this.props.src} type="video/mp4" />
        </video>
      </div>
    )
  }
}

export default VOD

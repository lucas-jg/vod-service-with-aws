import React, { Component } from "react"
import "./VOD.css"

class VOD extends Component {
  render() {
    return (
      <div className="VOD">
        <video id="clip" controls preload="auto" width="640" height="264" data-setup="{}">
          <source src={this.props.src} type="video/mp4" />
        </video>
      </div>
    )
  }
}

export default VOD

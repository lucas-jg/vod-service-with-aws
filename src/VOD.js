import React, { Component } from "react"
import "./VOD.css"
import PropTypes from "prop-types"

class VOD extends Component {
  static propTypes = {
    title: PropTypes.string,
    src: PropTypes.string
  }

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

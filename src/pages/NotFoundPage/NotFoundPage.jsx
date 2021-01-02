import React, { Component } from "react"
var __html = require("./NotFoundPage.html.js")
var template = { __html: __html }

class ScreenShare extends Component {
  render() {
    return (
      <div className="screen-share">
        <span dangerouslySetInnerHTML={template} />
      </div>
    )
  }
}
export default ScreenShare

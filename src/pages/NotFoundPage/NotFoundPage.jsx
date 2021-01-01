import React from "react"

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isNavBarHidden: true }
  }

  render() {
    return (
      <h1>
        404 <br />
        Page Not Found
      </h1>
    )
  }
}

export default NotFoundPage

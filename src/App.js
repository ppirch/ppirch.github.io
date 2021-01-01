import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./pages"
const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>
const NotFoundPage = () => (
  <h1>
    404 <br />
    Page Not Found
  </h1>
)
class App extends Component {
  render() {
    return (
      <div className="App container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/posts" component={Post} />
          <Route path="/projects" component={Project} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}
export default App

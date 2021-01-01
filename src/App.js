import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import { Home, NotFoundPage } from "./pages"
import { NavBar } from "./components"
import CssBaseline from "@material-ui/core/CssBaseline"

const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>

const RouteWithNavBar = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      <NavBar />
      <Component />
    </Route>
  )
}
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App container">
          <Switch>
            <RouteWithNavBar path="/" component={Home} exact />
            <RouteWithNavBar path="/about" component={About} />
            <RouteWithNavBar path="/posts" component={Post} />
            <RouteWithNavBar path="/projects" component={Project} />
            <Route component={NotFoundPage} exact />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}
export default App

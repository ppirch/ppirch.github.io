import React from "react"
import { Switch, Route } from "react-router-dom"
import {
  Album,
  Blog,
  Checkout,
  SignIn,
  SignInSide,
  SignUp,
  StickyFooter,
  Pricing,
  NotFoundPage,
  Dashboard,
  LocationTag,
  Portfolio,
  Showcase,
  FindSynonym,
} from "./pages"
import { PortfolioNavBar } from "./components"
import { BasicRouteNav } from "./utils/RouteNav.jsx"

const App = () => {
  return (
    <React.Fragment>
      <div className="App container">
        <Switch>
          <BasicRouteNav
            path="/"
            component={Portfolio}
            nav={PortfolioNavBar}
            exact
          />
          <Route path="/album" component={Album} exact />
          <Route path="/blog" component={Blog} exact />
          <BasicRouteNav
            path="/showcase"
            component={Showcase}
            nav={PortfolioNavBar}
            exact
          />
          <BasicRouteNav
            path="/showcase/location-tag"
            component={LocationTag}
            nav={PortfolioNavBar}
            exact
          />
          <BasicRouteNav
            path="/showcase/find-synonym"
            component={FindSynonym}
            nav={PortfolioNavBar}
            exact
          />
          <Route path="/checkout" component={Checkout} exact />
          <Route path="/pricing" component={Pricing} exact />
          <Route path="/signup" component={SignUp} exact />
          <Route path="/signin" component={SignIn} exact />
          <Route path="/signin-side" component={SignInSide} exact />
          <Route path="/sticky-footer" component={StickyFooter} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route component={NotFoundPage} exact />
        </Switch>
      </div>
    </React.Fragment>
  )
}
export default App

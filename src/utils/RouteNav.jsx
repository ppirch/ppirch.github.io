import React from "react"
import { Route } from "react-router-dom"

export const BasicRouteNav = ({
  nav: NavBar,
  component: Component,
  ...rest
}) => {
  return (
    <Route {...rest}>
      <NavBar />
      <Component />
    </Route>
  )
}

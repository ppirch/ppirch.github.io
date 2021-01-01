import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const HideOnScroll = (props) => {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const styles = (theme) => ({
  appBar: {
    backgroundColor: "#02a9f1",
  },
})

class NavBar extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <HideOnScroll {...this.props}>
        <AppBar position="sticky" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h5">PPirch</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    )
  }
}

export default withStyles(styles)(NavBar)

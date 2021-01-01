import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  Link,
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { Link as LinkDOM } from "react-router-dom"

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
  toolBar: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  title: {
    flexGrow: 1,
  },
  linkSpace: {
    padding: 10,
  },
})

class NavBar extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <HideOnScroll {...this.props}>
        <AppBar position="sticky" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Typography variant="h5" className={classes.title}>
              <Link component={LinkDOM} to="/" color="inherit">
                PPirch
              </Link>
            </Typography>
            <Typography>
              <Link
                component={LinkDOM}
                to="/about"
                color="inherit"
                className={classes.linkSpace}
              >
                About Me
              </Link>
              <Link
                component={LinkDOM}
                to="/projects"
                color="inherit"
                className={classes.linkSpace}
              >
                Projects
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    )
  }
}

export default withStyles(styles)(NavBar)

import React from "react"
import {
  BottomNavigation,
  BottomNavigationAction,
  Link,
  Typography,
  Box,
} from "@material-ui/core"

import {
  Facebook,
  Instagram,
  Twitter,
  GitHub,
  LinkedIn,
  Copyright,
} from "@material-ui/icons"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  wrapIcon: {
    marginTop: 5,
    verticalAlign: "middle",
    display: "inline-flex",
    fontWeight: "lighter",
  },
  bottomNav: {
    backgroundColor: "#FAFAFA",
    marginBottom: "5%",
  },

  footerText: {
    fontWeight: "lighter",
    fontSize: "2em",
  },
}))

const BottomNav = (props) => {
  const classes = useStyles(props)

  return (
    <Box>
      <Typography className={classes.footerText}>
        Learn, Live, Eat, Sleep & Repeat
      </Typography>
      <BottomNavigation className={classes.bottomNav}>
        <BottomNavigationAction
          component={Link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ppirch"
          icon={<GitHub fontSize="large" htmlColor="#333" />}
        />
        <BottomNavigationAction
          component={Link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/pakin-pirch-1788251aa"
          icon={<LinkedIn fontSize="large" htmlColor="#0e76a8" />}
        />
        <BottomNavigationAction
          component={Link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/pirchq/"
          icon={<Facebook fontSize="large" htmlColor="#3b5999" />}
        />

        <BottomNavigationAction
          component={Link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/pirchq"
          icon={<Twitter fontSize="large" htmlColor="#00acee" />}
        />
        <BottomNavigationAction
          component={Link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/pirchq/"
          icon={<Instagram fontSize="large" htmlColor="#e95950" />}
        />
      </BottomNavigation>
      <Typography className={classes.wrapIcon}>
        Handcrafted by me <Copyright style={{ margin: "0 5" }} /> twenty
        twenty-one
      </Typography>
    </Box>
  )
}

export default BottomNav

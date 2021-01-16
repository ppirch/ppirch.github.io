import React, { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  Link,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Hidden,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link as LinkDOM } from "react-router-dom"

import Avatar from "@material-ui/core/Avatar"
import { Call, Mail, Place } from "@material-ui/icons"
import PropTypes from "prop-types"
import MenuLeft from "./MenuLeft.jsx"
function SimpleDialog(props) {
  const { open, onClose } = props
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{"Contact Me"}</DialogTitle>
      <DialogContent>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="E-Mail" secondary="pakin.pirch@gmail.com" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Call />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Phone" secondary="+66-6371-87419" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Place />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Address" secondary="Chiang Mai, Thailand" />
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  )
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

const HideOnScroll = (props) => {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#FFFFFF",
  },
  toolBar: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  title: {
    flexGrow: 1,
    color: "#02a9f7",
  },
  linkSpace: {
    padding: 10,
    color: "#000000",
    fontWeight: "lighter",
  },
}))

const Navbar = (props) => {
  const classes = useStyles(props)

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <HideOnScroll {...props}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h4" className={classes.title}>
            <Link component={LinkDOM} to="/" color="inherit">
              <b>PPirch</b>
            </Link>
          </Typography>
          <Typography>
            <Hidden smUp>
              <MenuLeft handleClickOpen={handleClickOpen} />
            </Hidden>
            <Hidden xsDown>
              <Link
                href=""
                component={LinkDOM}
                to="/showcase"
                className={classes.linkSpace}
              >
                Showcase
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/@pakin.pirch"
                className={classes.linkSpace}
              >
                Blog
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.kaggle.com/pirchlearning"
                className={classes.linkSpace}
              >
                Kaggle
              </Link>
              <Button
                variant="outlined"
                className={classes.linkSpace}
                onClick={handleClickOpen}
              >
                Contact
              </Button>
            </Hidden>
          </Typography>
          <SimpleDialog open={open} onClose={handleClose} />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default Navbar

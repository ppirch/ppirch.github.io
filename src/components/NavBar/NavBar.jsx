import React from "react"
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
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link as LinkDOM } from "react-router-dom"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import { Call, Mail, Place } from "@material-ui/icons"
import BeachAccessIcon from "@material-ui/icons/BeachAccess"

import PropTypes from "prop-types"

const emails = ["username@gmail.com", "user02@gmail.com"]

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
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
  selectedValue: PropTypes.string.isRequired,
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
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(emails[1])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (value) => {
    setOpen(false)
    setSelectedValue(value)
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
          </Typography>
          <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default Navbar

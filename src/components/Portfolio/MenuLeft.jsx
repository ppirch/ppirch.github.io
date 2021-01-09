import * as React from "react"
import { Link, Button, Menu, MenuItem } from "@material-ui/core"
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks"

import { makeStyles } from "@material-ui/core/styles"
import { Link as LinkDOM } from "react-router-dom"
import { Menu as MenuIcon } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  linkSpace: {
    color: "#000000",
  },
}))

const MenuLeft = (props) => {
  const classes = useStyles(props)
  const { handleClickOpen } = props
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" })
  return (
    <React.Fragment>
      <Button {...bindTrigger(popupState)}>
        <MenuIcon />
      </Button>
      <Menu {...bindMenu(popupState)}>
        <MenuItem
          component={LinkDOM}
          to="/demo"
          className={classes.linkSpace}
          onClick={popupState.close}
        >
          Demo
        </MenuItem>
        <MenuItem
          component={Link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@pakin.pirch"
          className={classes.linkSpace}
          onClick={popupState.close}
        >
          Blog
        </MenuItem>

        <MenuItem
          component={Link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.kaggle.com/pirchlearning"
          className={classes.linkSpace}
          onClick={popupState.close}
        >
          Kaggle
        </MenuItem>
        <MenuItem onClick={handleClickOpen}>Contact</MenuItem>
      </Menu>
    </React.Fragment>
  )
}

export default MenuLeft

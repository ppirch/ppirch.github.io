import React from "react"
import {
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Box,
} from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import pcshscrIcon from "../../assets/images/PCSHSCR.png"
import cmuIcon from "../../assets/images/CMU.jpg"

const useStyles = makeStyles((theme) => ({
  secondaryText: {
    fontWeight: "lighter",
    fontSize: 18,
    color: "#757575",
  },
  contentText: {
    fontWeight: "bold",
    fontSize: 22,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: "3em",
    marginBottom: 15,
  },
}))

const Education = (props) => {
  const classes = useStyles(props)

  return (
    <Box>
      <Typography className={classes.titleText} style={{ textAlign: "center" }}>
        Education
      </Typography>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="PCSHSCR LOGO" src={pcshscrIcon} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography className={classes.contentText}>
                Princess Chulabhorn Science High School Chiang Rai
              </Typography>
            }
            secondary={
              <Typography className={classes.secondaryText}>
                Sciences-Mathematics Program
              </Typography>
            }
          />
        </ListItem>
        <Divider component="li" variant="inset" />
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="CMU LOGO" src={cmuIcon} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography className={classes.contentText}>
                Chiang Mai University
              </Typography>
            }
            secondary={
              <Typography className={classes.secondaryText}>
                Faculty of Science, Data science Major
              </Typography>
            }
          />
        </ListItem>
        <Divider component="li" variant="inset" />
      </List>
    </Box>
  )
}

export default Education

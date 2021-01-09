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
import POSN from "../../assets/images/posn.png"
import NSC from "../../assets/images/NSC.png"
import SuperAI from "../../assets/images/SuperAI.png"
import AZURE from "../../assets/images/AZURE.png"
import NECTEC from "../../assets/images/NECTEC.jpg"
import AIAT from "../../assets/images/AIAT.png"

const useStyles = makeStyles((theme) => ({
  secondaryText: {
    fontWeight: "lighter",
    fontSize: 18,
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

const Activities = (props) => {
  const classes = useStyles(props)

  return (
    <Box>
      <Typography className={classes.titleText}>Activities</Typography>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="POSN LOGO" src={POSN} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography className={classes.contentText}>
                The 14th Thailand Olympiad in Informatics 2018
              </Typography>
            }
            secondary={
              <Typography className={classes.secondaryText}>
                Finalist
              </Typography>
            }
          />
        </ListItem>
        <Divider component="li" variant="inset" />
        <ListItem>
          <ListItemAvatar>
            <Avatar variant="rounded" alt="NECTEC LOGO" src={NECTEC} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography className={classes.contentText}>
                Research skills practices at Nectec
              </Typography>
            }
            secondary={
              <Typography className={classes.secondaryText}>
                Topic : Data analytics and Machine learning
              </Typography>
            }
          />
        </ListItem>
        <Divider component="li" variant="inset" />
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="NSC LOGO" src={NSC} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography className={classes.contentText}>
                National Software Contest - NSC Thailand
              </Typography>
            }
            secondary={
              <Typography className={classes.secondaryText}>
                (2019) : Second Prize of Question answering program from Thai
                Wikipedia <br />
                (2020) : Honorable mention of BEST 2020 (Handwritten
                Recognition)
              </Typography>
            }
          />
        </ListItem>
        <Divider component="li" variant="inset" />
        <ListItem>
          <ListItemAvatar>
            <Avatar variant="rounded" alt="AZURE LOGO" src={AZURE} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography className={classes.contentText}>
                Azure Musketeers
              </Typography>
            }
            secondary={
              <Typography className={classes.secondaryText}>
                1st generation of Azure Musketeers Program at Microsoft Thailand
              </Typography>
            }
          />
        </ListItem>
        <Divider component="li" variant="inset" />
        <ListItem>
          <ListItemAvatar>
            <Avatar variant="rounded" alt="AIAT LOGO" src={AIAT} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography className={classes.contentText}>
                AIAT Hackathon 2 / 2020
              </Typography>
            }
            secondary={
              <Typography className={classes.secondaryText}>
                Second Prize of Natural Language Processing (NLP)
              </Typography>
            }
          />
        </ListItem>
        <Divider component="li" variant="inset" />
        <ListItem>
          <ListItemAvatar>
            <Avatar variant="rounded" alt="SuperAI LOGO" src={SuperAI} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography className={classes.contentText}>
                Super AI Engineer – AI for ALL
              </Typography>
            }
            secondary={
              <Typography className={classes.secondaryText}>
                Basic AI
              </Typography>
            }
          />
        </ListItem>
        <Divider component="li" variant="inset" />
      </List>
    </Box>
  )
}

export default Activities

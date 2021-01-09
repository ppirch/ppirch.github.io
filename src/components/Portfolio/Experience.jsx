import React from "react"
import { Typography, Paper, Box } from "@material-ui/core"

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@material-ui/lab/"

import { makeStyles } from "@material-ui/core/styles"
import { Forum, Description, LaptopMac, Star } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  timelinePaper: {
    padding: "6px 16px",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: "3em",
    marginBottom: 15,
  },
  secondaryText: {
    fontWeight: "lighter",
    fontSize: 20,
  },
  contentText: {
    fontWeight: "bold",
    fontSize: 22,
  },
}))
const Experience = (props) => {
  const classes = useStyles(props)

  return (
    <Box>
      <Typography className={classes.titleText} style={{ textAlign: "center" }}>
        Experience
      </Typography>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h6" color="textSecondary">
              2019 - 2020
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <Forum />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.timelinePaper}>
              <Typography className={classes.contentText}>AIYA</Typography>
              <Typography className={classes.secondaryText}>
                Backend Developer
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h6" color="textSecondary">
              2020
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="error">
              <LaptopMac />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.timelinePaper}>
              <Typography className={classes.contentText}>
                Synapse AI
              </Typography>
              <Typography className={classes.secondaryText}>
                Data scientist & Data engineer
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h6" color="textSecondary">
              2020 - Present
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <Description />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.timelinePaper}>
              <Typography className={classes.contentText}>VISTEC</Typography>
              <Typography className={classes.secondaryText}>
                Research assistant in NLP field
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h6" color="textSecondary">
              2020 - Present
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <Star />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.timelinePaper}>
              <Typography className={classes.contentText}>NARIT</Typography>
              <Typography className={classes.secondaryText}>
                Full Stack developer
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  )
}

export default Experience

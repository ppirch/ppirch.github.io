import React from "react"
import { Typography, Box } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  contentText: {
    fontWeight: "lighter",
    fontSize: 20,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: "3em",
    marginBottom: 15,
  },
}))

const Intro = (props) => {
  const classes = useStyles(props)

  return (
    <Box>
      <Typography className={classes.titleText}>
        Hi, I’m Pirch. Nice to meet you.
      </Typography>
      <Typography className={classes.contentText}>
        Highly skilled in machine learning, data visualization, and creative
        thinking. Ability to use data, statistics, machine learning and deep
        learning techniques for finding complex data patterns that drive
        meaningful impact on the business. Excellent in Natural Language
        Processing & Natural Language Understanding. Inventive Front End
        Development with ReactJS and <nobr>Back-End</nobr> Development with
        Python. I enjoy working in a team and communicating.
      </Typography>
    </Box>
  )
}

export default Intro

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

const Activities = (props) => {
  const classes = useStyles(props)

  return (
    <Box>
      <Typography className={classes.titleText}>Activities</Typography>
      <Typography className={classes.contentText}>
        (will be updated soon…)
      </Typography>
    </Box>
  )
}

export default Activities

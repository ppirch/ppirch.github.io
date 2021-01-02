import React from "react"
import { Typography, Card, CardContent, Box } from "@material-ui/core"
import { InsertChart } from "@material-ui/icons"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  skillCard: {
    paddingTop: "5%",
    paddingLeft: "15%",
    paddingRight: "15%",
    paddingBottom: "5%",
    textAlign: "center",
  },
  contentTitleText: {
    marginTop: 35,
    fontSize: 20,
    fontWeight: "lighter",
    color: "#02a9f7",
  },
  contentText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "lighter",
  },
}))

const SkillCardDataSci = (props) => {
  const classes = useStyles(props)
  return (
    <Box>
      <Card className={classes.skillCard}>
        <CardContent>
          <InsertChart style={{ fontSize: 65 }} htmlColor="#02a9f7" />
          <Typography style={{ fontSize: "2em", fontWeight: "bold" }}>
            Data Scientist
          </Typography>
          <Typography className={classes.contentText}>
            If you have data without information, <nobr>Just let me know</nobr>{" "}
            and <nobr>I'll give it to you.</nobr>
          </Typography>
          <Typography className={classes.contentTitleText}>
            Languages I speak:
          </Typography>
          <Typography className={classes.contentText}>
            Python, R, SQL
          </Typography>
          <Typography className={classes.contentTitleText}>
            Framework:
          </Typography>
          <Typography className={classes.contentText}>
            Scikit-Learn, Pytorch, OpenCV
          </Typography>
          <Typography className={classes.contentTitleText}>
            Technical skills:
          </Typography>
          <Typography className={classes.contentText}>
            Machine Learning & Deep Learning
            <br />
            Computer Vision
            <br />
            NLP & NLU
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default SkillCardDataSci

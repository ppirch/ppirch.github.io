import React from "react"
import { Typography, Card, CardContent, Box } from "@material-ui/core"
import { Code } from "@material-ui/icons"

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

const SkillCardDev = (props) => {
  const classes = useStyles(props)

  return (
    <Box>
      <Card className={classes.skillCard}>
        <CardContent>
          <Code style={{ fontSize: 65 }} htmlColor="#02a9f7" />
          <Typography style={{ fontSize: "2em", fontWeight: "bold" }}>
            Developer
          </Typography>
          <Typography className={classes.contentText}>
            I learn to code as a web developer to make my ideas happen.
          </Typography>
          <Typography className={classes.contentTitleText}>
            Languages I speak:
          </Typography>
          <Typography className={classes.contentText}>
            HTML, CSS, SQL, Python
          </Typography>
          <Typography className={classes.contentTitleText}>
            Framework:
          </Typography>
          <Typography className={classes.contentText}>
            NodeJS, ReactJS, FastAPI, Flask
          </Typography>
          <Typography className={classes.contentTitleText}>
            Dev Tools:
          </Typography>
          <Typography className={classes.contentText}>
            VS Code
            <br />
            Git
            <br />
            Terminal
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default SkillCardDev

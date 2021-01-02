import React from "react"
import { Container, Grid, Typography, Avatar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import {
  Activities,
  BottomNav,
  Experience,
  Education,
  Intro,
  SkillCardDataSci,
  SkillCardDev,
} from "../../components/"

import avatarIcon from "../../assets/images/avatar.png"

const useStyles = makeStyles((theme) => ({
  headerSection: {
    padding: "5%",
    height: "100%",
  },
  introSection: {
    paddingTop: "5%",
    paddingLeft: "20%",
    paddingRight: "20%",
    paddingBottom: "5%",
    color: "white",
    backgroundColor: "#02a9f7",
    textAlign: "center",
  },
  skillSection: {
    padding: "2.5%",
    paddingTop: "2.5%",
    paddingBottom: "5%",
  },
  educationSection: {
    padding: "5%",
  },
  experienceSection: {
    padding: "5%",
  },
  footerSection: {
    margin: "5%",
    textAlign: "center",
  },
  large: {
    margin: "0 auto",
    marginTop: 24,
    marginBottom: 24,
    width: theme.spacing(48),
    height: theme.spacing(48),
  },
  contentText: {
    fontWeight: "lighter",
    fontSize: 20,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: "3em",
    marginBottom: 15,
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
}))

const Home = (props) => {
  const classes = useStyles(props)

  return (
    <Container maxWidth={false} style={{ padding: 0 }}>
      <Grid container>
        <Grid item xs={0} sm={6} className={classes.headerSection}>
          <Avatar
            alt="Pakin Pirch"
            src={avatarIcon}
            className={classes.large}
          />
        </Grid>
        <Grid item xs={0} sm={6} className={classes.headerSection}>
          <Typography className={classes.titleText}>
            Data Scientist <br />& Full Stack Developer
          </Typography>
          <Typography
            style={{ fontSize: "1.5em" }}
            className={classes.contentText}
          >
            Learning is a Lifelong Process, and I am still learning.
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.introSection}>
          <Intro />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.skillSection}>
          <SkillCardDataSci />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.skillSection}>
          <SkillCardDev />
        </Grid>
        <Grid item xs={12} className={classes.educationSection}>
          <Education />
        </Grid>
        <Grid item xs={12} className={classes.experienceSection}>
          <Experience />
        </Grid>
        <Grid item xs={12} className={classes.introSection}>
          <Activities />
        </Grid>
        <Grid item xs={12} sm={12} className={classes.footerSection}>
          <BottomNav />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home

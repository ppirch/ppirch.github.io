import React from "react"
import { Container, Grid } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const styles = (theme) => ({
  root: {
    backgroundColor: "#d4f0fc",
  },
  gridLayout: {
    paddingLeft: 10,
    paddingRight: 10,
  },
})

class Home extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <Container maxWidth={false} className={classes.root}>
        <Grid container className={classes.gridLayout}>
          <Grid item xs={12} sm={12}>
            <h1>Hello World</h1>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles)(Home)

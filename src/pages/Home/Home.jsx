import React from "react"
import { Container, Grid } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const styles = (theme) => ({
  root: {
    padding: 0,
    height: "100vh",
    backgroundColor: "#d4f0fc",
  },
})
class Home extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <Container maxWidth={false} className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <h1>Hello World</h1>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles)(Home)

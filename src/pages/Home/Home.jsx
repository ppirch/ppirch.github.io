import React from "react"
import { Container, Typography, Box } from "@material-ui/core"
import { Copyright, ProTip } from "../../components"

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}

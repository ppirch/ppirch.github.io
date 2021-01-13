import React from "react"
import { Container, Typography, Box, Button, Link } from "@material-ui/core"
import { Copyright, ProTip } from "../../components"
import { DataGrid } from "@material-ui/data-grid"
import { Link as LinkDOM } from "react-router-dom"

const columns = [
  { field: "id", headerName: "ID", width: 70, hide: true },
  { field: "name", headerName: "Project Name", width: 250 },
  { field: "detail", headerName: "Detail", width: 500 },
  {
    field: "link",
    headerName: "Example",
    sortable: false,
    width: 160,
    renderCell: (params) => (
      <Button
        to={params.value}
        href={params.value}
        component={params.value.startsWith("http") ? Link : LinkDOM}
        variant="outlined"
      >
        Click
      </Button>
    ),
  },
]

const rows = [
  {
    id: 1,
    name: "Thai Address Recognition",
    detail: "Extract address information form thai sentence",
    link: "/demo/location-tag",
  },
  {
    id: 2,
    name: "Synonym Finder",
    detail: "Find the synonyms of thai word",
    link: "/demo/find-synonym",
  },
  {
    id: 3,
    name: "Food2Calorie",
    detail: "Predict food calorie from image",
    link: "http://202.28.248.56/",
  },
]

export default function Demo() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Demo AI Application
        </Typography>
        <div style={{ height: 400, width: "100%", margin: "5%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick={true}
          />
        </div>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}

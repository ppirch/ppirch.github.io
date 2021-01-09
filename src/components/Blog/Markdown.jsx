import React from "react"
import ReactMarkdown from "react-markdown"
import { withStyles } from "@material-ui/core/styles"
import {
  Typography,
  Link,
  Table,
  TableContainer,
  Paper,
  Box,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core"

const styles = (theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
  header: {
    marginTop: theme.spacing(2),
  },
})

function MarkdownParagraph(props) {
  return <Typography>{props.children}</Typography>
}

const MarkdownHeading = withStyles(styles)(({ classes, ...props }) => {
  let variant
  switch (props.level) {
    case 1:
      variant = "h5"
      break
    case 2:
      variant = "h6"
      break
    case 3:
      variant = "subtitle1"
      break
    case 4:
      variant = "subtitle2"
      break
    default:
      variant = "h6"
      break
  }
  return (
    <Typography className={classes.header} gutterBottom variant={variant}>
      {props.children}
    </Typography>
  )
})

const MarkdownListItem = withStyles(styles)(({ classes, ...props }) => {
  return (
    <li className={classes.listItem}>
      <Typography component="span">{props.children}</Typography>
    </li>
  )
})

function MarkdownTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        {props.children}
      </Table>
    </TableContainer>
  )
}

function MarkdownTableCell(props) {
  return (
    <TableCell>
      <Typography>{props.children}</Typography>
    </TableCell>
  )
}

function MarkdownTableRow(props) {
  return <TableRow>{props.children}</TableRow>
}

function MarkdownTableBody(props) {
  return <TableBody>{props.children}</TableBody>
}

function MarkdownTableHead(props) {
  return <TableHead>{props.children}</TableHead>
}

const renderers = {
  heading: MarkdownHeading,
  paragraph: MarkdownParagraph,
  link: Link,
  listItem: MarkdownListItem,
  table: MarkdownTable,
  tableHead: MarkdownTableHead,
  tableBody: MarkdownTableBody,
  tableRow: MarkdownTableRow,
  tableCell: MarkdownTableCell,
  image: ({ alt, src, title }) => (
    <Box style={{ textAlign: "center" }}>
      <img alt={alt} src={src} title={title} style={{ maxWidth: "90%" }} />
    </Box>
  ),
}

export default function Markdown(props) {
  return <ReactMarkdown escapeHtml={false} renderers={renderers} {...props} />
}

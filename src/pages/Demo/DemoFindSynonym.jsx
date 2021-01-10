import React, { useState } from "react"
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  CircularProgress,
  Link,
} from "@material-ui/core"
import { Copyright } from "../../components"
import { findSynonym } from "../../api/ppirch-ai-api"

const DemoFindSynonym = () => {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [result, setResult] = useState(false)
  const handleChang = (event) => {
    setInput(event.target.value)
  }

  const handleClick = async () => {
    setLoading(true)
    setError(false)
    setResult(false)
    findSynonym(input)
      .then((data) => {
        console.log(data)
        setResult(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setError(true)
        setLoading(false)
      })
  }

  const renderResult = () => {
    if (loading)
      return (
        <CircularProgress style={{ marginLeft: "50%", marginRight: "50%" }} />
      )
    if (error) return <Typography gutterBottom>เกิดข้อผิดพลาด</Typography>
    if (result)
      return (
        <Box>
          <pre>
            <Typography gutterBottom style={{ fontSize: 16 }}>
              {JSON.stringify(result, null, 2)}
            </Typography>
          </pre>
        </Box>
      )
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Synonym Finder
        </Typography>
        <Typography variant="h6" component="h1" gutterBottom>
          ค้นหาคำที่มีความหมายเหมือนกันจาก Wordnet
        </Typography>

        <Box my={2}>
          <Typography gutterBottom>
            API :
            <Link
              style={{ marginLeft: 5 }}
              href="https://ppirch-ai-api.herokuapp.com/docs#/"
            >
              https://ppirch-ai-api.herokuapp.com/docs
            </Link>
          </Typography>
          <Typography gutterBottom>Example : หมา</Typography>
          <TextField
            placeholder="กรอกคำที่ต้องการลงช่องนี้"
            style={{ width: "100%", fontSize: 18 }}
            onChange={handleChang}
          />
        </Box>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Submit
        </Button>
        <Box my={2}>
          <Typography gutterBottom>Result :</Typography>
          <Box>{renderResult()}</Box>
        </Box>
        <Copyright />
      </Box>
    </Container>
  )
}

export default DemoFindSynonym

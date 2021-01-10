import axios from "axios"
const qs = require("qs")

const apiUrl = process.env.REACT_APP_PPIRCH_AI_API || "http://localhost:8000"

export const getLocationTag = async (text) => {
  const queryURL = `${apiUrl}/nlp/location-tag`
  const { data } = await axios.post(queryURL, { text })
  return data
}

export const findSynonym = async (text) => {
  const query = qs.stringify({
    text: text,
  })
  const queryURL = `${apiUrl}/nlp/find-synonym?${query}`
  const { data } = await axios.get(queryURL)
  return data
}

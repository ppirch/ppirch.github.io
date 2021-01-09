import axios from "axios"

const apiUrl = process.env.REACT_APP_PPIRCH_AI_API || "http://localhost:8000"

export const getLocationTag = async (text) => {
  const queryURL = `${apiUrl}/nlp/location-tag`
  const { data } = await axios.post(queryURL, { text })
  return data
}

const Cite = require("citation-js")
var parse = require("html-react-parser")

export const render_bibx = async (bibx_in) => {
  var cite = new Cite()
  await cite.add(bibx_in)
  const format = cite.format("bibliography", {
    format: "html",
    template: "apa",
  })
  return parse(format)
}

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
// const bibx_in_1 = `@misc{boonkwan2020annotation,title={The Annotation Guideline of LST20 Corpus},author={Prachya Boonkwan and Vorapon Luantangsrisuk and Sitthaa Phaholphinyo and Kanyanat Kriengket and Dhanon Leenoi and Charun Phrombut and Monthika Boriboon and Krit Kosawat and Thepchai Supnithi},year={2020},eprint={2008.05055},archivePrefix={arXiv},primaryClass={cs.CL}}`
// render_bibx(bibx_in_1).then((res) => console.log(res))
// const bibx_in_2 = `@misc{pythainlp,
//     author       = {Wannaphong Phatthiyaphaibun, Korakot Chaovavanich, Charin Polpanumas, Arthit Suriyawongkul, Lalita Lowphansirikul, Pattarawat Chormai},
//     title        = {{PyThaiNLP: Thai Natural Language Processing in Python}},
//     month        = Jun,
//     year         = 2016,
//     doi          = {10.5281/zenodo.3519354},
//     publisher    = {Zenodo},
//     url          = {http://doi.org/10.5281/zenodo.3519354}
// }`
// render_bibx(bibx_in_2).then((res) => console.log(res))

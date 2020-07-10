const express = require("express")

const app = express()
const port = 5000

app.get("/:id?", (req, res) => {
  let { id } = req.params
  res.json({ id: 1, name: "hwy", num: id })
})

app.listen(port, (err) => {
  if (err) return err
  console.log(port + "端口已开启...")
})

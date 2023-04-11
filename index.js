const express = require('express')
const app = express()
const port = 8080

app.get('/azure-aks', (req, res) => {
  res.send('Hello World! from azure-aks service')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

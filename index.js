const express = require('express');
const app = express();
const axios = require('axios');
const port = 8080;

app.get('/azure-aks', (req, res) => {
  res.send('Hello World! from azure-aks service')
});

app.get('/hello-world', async (req, res) => {
  console.log('Query string', req.query.url);
   try {
    const response = await axios.get(`${req.query.url}`);
    console.log(response.data);
     res.send(response.data);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

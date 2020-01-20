const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

let response;
fs.readFile('src/server/searchResult.json', (err, data) => {
  if (err) throw err;
  response = data.toString();
  console.log(response);
});

app.get('/', (req, res) => res.send(response));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

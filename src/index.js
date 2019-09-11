const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

function getUsers(req, res) {
  const data = fs.readFileSync('./users.json');
  res.send(data);
}

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/users', (req, res) => getUsers(req, res));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
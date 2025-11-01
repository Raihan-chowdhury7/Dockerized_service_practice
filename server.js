const express = require('express');
const basicAuth = require('basic-auth');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/secret', (req, res) => {
  const user = basicAuth(req);

  if (!user || user.name !== process.env.USERNAME || user.pass !== process.env.PASSWORD) {
    res.set('WWW-Authenticate', 'Basic realm="example"');
    return res.status(401).send('Authentication required.');
  }

  res.send(process.env.SECRET_MESSAGE);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

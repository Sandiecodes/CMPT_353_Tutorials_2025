'use strict';

const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');

const PORT = 8082;
const HOST = '0.0.0.0';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Serve the posting.html directly at the root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/posting.html');
});

app.post('/save', (req, res) => {
  const filename = req.body.filename;
  const data = req.body.data;
  fs.writeFile('pages/' + filename, data, { flag: 'a+' }, err => {
    if (err) {
      console.error(err);
      res.status(500).send("Error saving the file.");
      return;
    }
    res.send("ok");
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});

var express = require('express');
var app = express();

let port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
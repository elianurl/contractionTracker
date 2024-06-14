const express = require('express');
const bodyParser = require('body-parser');
const registrosRouter = require('./routes/registros');

const app = express();
const port = 3000;
const host = localhost;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', registrosRouter);

app.listen(port, () => {
  console.log(`App listening at http://${host}:${port}`);
});

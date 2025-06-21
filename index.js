const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3004;

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () =>
  console.log(`App listening at port http://localhost:${port}`)
);

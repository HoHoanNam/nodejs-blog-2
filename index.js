const express = require('express');
const app = express();
const port = 3004;

app.get('/', (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;

  res.send('Hello World!');
});

app.listen(port, () =>
  console.log(`App listening at port http://localhost:${port}`)
);

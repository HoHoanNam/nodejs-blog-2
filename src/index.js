const path = require('path');
const morgan = require('morgan');
const express = require('express');
const { engine: handlebars } = require('express-handlebars'); // Sử dụng engine từ express-handlebars

const app = express();
const port = 3004;

// HTTP request logger
app.use(morgan('combined'));

// Template engine
/*
 Ứng dụng node của chúng ta đang sử dụng 
 template engine là handlebars
 */
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  })
);
/*
 Ứng dụng node của chúng ta đang sử dụng 
 view engine là handlebars
 */
app.set('view engine', 'hbs');
// _dirname: tên thưc mục gốc mà index.js đang chạy (src)
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () =>
  console.log(`App listening at port http://localhost:${port}`)
);

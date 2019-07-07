const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');
const router=require('./router.js');
//获取文章
const app = express();


app.use(history({
  index: './index.html'
}));
app.use(express.static(path.join(__dirname,'../dist')));

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

router(app);

app.listen(3000,() => console.log('success listen at port:3000......'));
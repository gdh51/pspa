const express = require('express');
const app = express();
const history = require('connect-history-api-fallback');
const initRouter = require('./routes/index');
const bodyParser = require('body-parser');
const { cors } = require('./config/index');
const path = require('path');
require('./database/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 设置单页路由
app.use(history({
    index: '/index.html'
}));

// 开放静态资源
app.use(express.static(path.join(__dirname, './static')));

// // 先允许跨域
// app.all('*', function (req, res, next) {
//     res.header(cors);
//     next();
// });

initRouter(app);

app.listen(3000, () => console.log('success listen at port:3000......'));
const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/personalBlog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db.on('error', (err) => console.log(err));
db.on('open', () => console.log('开启'));
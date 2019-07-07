const mongoose = require('mongoose');
const db = mongoose.connection;
const queryObj = mongoose.Schema({});
const categories = mongoose.model('categorie', queryObj);
const tags = mongoose.model('tag', queryObj);
const articles = mongoose.model('article', queryObj);
const infototals = mongoose.model('infototal', {
  "tags": Number,
  "archives": Number,
  "categories": Number,
  "view": Number
});

const list={
  "/categories": categories,
  '/tags':tags,
  "/archives":articles,
  "/infototals":infototals
}

function fnQuery(name, qualification, callback) {
  mongoose.connect('mongodb://localhost:27017/personalBlog', {
    useNewUrlParser: true
  });

  db.once("open", function () {
    list[name].find(qualification, function (err, docs) {
      callback(docs);
      db.close();
    });
  });
}

function view(callback) {
  mongoose.connect('mongodb://localhost:27017/personalBlog', {
    useNewUrlParser: true
  });
  db.once("open", function () {
    infototals.findById('5ca61273e080fcb9b233e7be',function (err, doc) {
      doc.view+=1;
      doc.save(function (e,p) {
        callback(p);
        db.close();
      });
    });
  });
}

module.exports = {fnQuery,view}; //返回数据库query对象
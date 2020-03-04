const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;
const ShareSchema = {
    title: String,
    id: ObjectId,
    tags: Array
};

// 定义文章模型
const articlesSchema = Schema({
    title: String,
    tags: Array,
    time: String,
    categories: Array,
    content: String,
    id: ObjectId
});

const archivesSchema = Schema({
    time: String,
    title: String,
    id: ObjectId
});

const visitorsSchema = {
    visited: Number,
    id: ObjectId,
    articles: Number,
    tags: Number,
    categories: Number
};


const tagsSchema = Schema(ShareSchema);

const categoriesSchema = Schema(ShareSchema);

let Schemas = {
    Articles: articlesSchema,
    Archives: archivesSchema,
    Tags: tagsSchema,
    Categories: categoriesSchema,
    Visitors: visitorsSchema
};

Object.keys(Schemas).map(name => Schemas[name] = model(name, Schemas[name]));

module.exports = Schemas;
const archivesController = require('./archives/index');
const articlesController = require('./articles/index');
const tagsController = require('./tags/index');
const categoriesController = require('./categories/index');
const indexController = require('./home/index');
const visitorsController = require('./visitors/index');
const epsController = require('./eps/index');

module.exports = {
    archivesController,
    articlesController,
    tagsController,
    categoriesController,
    indexController,
    visitorsController,
    epsController
};

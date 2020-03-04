const express = require('express');
const favicon = require('serve-favicon');
const {
    join
} = require('path');
const {
    archivesController,
    articlesController,
    tagsController,
    categoriesController,
    indexController,
    visitorsController
} = require('../controller/index')

function initRouter(app) {
    const router = express.Router();
    app.use(favicon(join(__dirname, '../../dist/img/favicon.ico')));
    router.get('/index.html', indexController)
    router.get('/visitors', visitorsController.get);
    router.get('/index', articlesController.getAll);
    router.get('/archives', archivesController.getAll)
    router.get('/articles', articlesController.getSpecific);
    router.get('/categories', categoriesController.getAll);
    router.get('/catagories/:specific', categoriesController.getSpecific);
    router.get('/tags', tagsController.getAll);
    router.get('/tags/:specific', tagsController.getSpecific);
    app.use('/', router);
}

module.exports = initRouter;
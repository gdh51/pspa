const { Articles } = require('../../database/model/index')

const articlesController = {
    getSpecific(req, res) {
        const title = req.query.title;

        Articles
            .findOne({ title })
            .exec((err, article) => {
                res.json(article);
            });
    },

    getAll(req, res) {
        Articles
            .find({})
            .exec((err, articles) => {
                res.json(articles);
            });
    }
};

module.exports = articlesController;

const {
    Categories
} = require('../../database/model/index')

const categoriesController = {
    getSpecific(req, res) {
        const title = req.params.specific;

        Categories
            .find({
                title
            })
            .exec((err, category) => {
                res.json(category);
            });
    },

    getAll(req, res) {
        Categories
            .find({})
            .exec((err, categories) => {
                res.json(categories);
            });
    }
};

module.exports = categoriesController;
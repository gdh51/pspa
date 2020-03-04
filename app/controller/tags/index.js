const {
    Tags
} = require('../../database/model/index')

const tagsController = {
    getSpecific(req, res) {
        const title = req.query.title;

        Tags
            .findOne({ title })
            .exec((err, tag) => {
                res.json(tag);
            });
    },

    getAll(req, res) {
        Tags.find({})
            .exec((err, tags) => {
                res.json(tags);
            });
    }
};

module.exports = tagsController;

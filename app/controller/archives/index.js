const {
    Archives
} = require('../../database/model/index')

const archivesController = {
    getSpecific(req, res) {
        const title = req.query.title;

        Archives
            .findOne({
                title
            })
            .exec((err, archive) => {
                res.json(archive);
            });
    },

    getAll(req, res) {
        Archives
            .find({})
            .exec((err, archives) => {
                res.json(archives);
            });
    }
};

module.exports = archivesController;

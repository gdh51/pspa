const {
    Visitors
} = require('../../database/model/index')

const visitorsController = {

    get(req, res) {
        Visitors.findOne({})
            .exec((err, tag) => {
                res.json(tag);
            });
    }
};

module.exports = visitorsController;

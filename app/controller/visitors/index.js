const {
    Visitors
} = require('../../database/model/index')

const visitorsController = {

    get(req, res) {
        Visitors.findOne({})
            .exec((err, info) => {
                if (err) return res.json({});
                info.visited += 1;
                info.save();
                res.json(info);
            });
    }
};

module.exports = visitorsController;

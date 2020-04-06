const { readFile } = require('fs');

let eps = null;

const epsController = {

    getAll(req, res) {
        if (eps) {
            return res.json(eps);
        }

        readFile('../../database/ep-data/index.json', 'utf-8', (err, file) => {
            res.json(file);
        });
    }
};

module.exports = epsController;
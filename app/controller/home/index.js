const { join } = require('path');

const indexController = (req, res) => {
    res.header({
        "Content-Type": "text/html; charset=utf-8"
    })
    res.sendFile(join(__dirname, '../../../dist/index.html'));
};

module.exports = indexController;
const sw = true;

module.exports.get = function () {
    return sw && ({
        "docs": {
            "tags": 2,
            "archives": 2,
            "categories": 3,
            "view": 4
        }
    });
}
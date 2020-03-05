const sw = true;

module.exports.get = function () {
    return sw && [{
        "_id": "5ca0d94cb792473d856bb2cf",
        "title": "Hello World",
        "time": "2019-3-20",
        "tags": [{
            "title": "生活"
        }],
        "categories": [{
            "title": "生活"
        }],
        "content": "# Hello Word\nIt's just a test before everything is ready.\n## Coming in\nLove you guy"
    }];
}
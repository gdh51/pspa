const sw = require('path');

module.exports.get = function () {
    return sw && ({
        "docs": [{
            "totalPage": 1,
            "time": "2018-8",
            "title": "asdasd",
            "path": "/article?title=helloworld",
            "content": [
                "<p>test</p>",
                "这只是一个测试"
            ],
            "type": {
                "name": "Vue",
                "path": "have"
            },
            "tags": [{
                "tag": "Vue",
                "path": "none"
            }]
        }]
    });
}
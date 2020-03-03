const PATH = require('path');
const fs = require('fs');

function mockMiddleware(req, res, next) {
    let accept = req.headers.accept;

    if (!acceptsHtml(accept)) {
        if (isRestful(req.path)) {
            searchMockData(req.path, req.method).then(file => {

                // 返回该数据
                res.header("Content-Type", "application/json; charset=utf-8")
                res.end(file);
            }).catch(() => next());
            return;
        }

        // 未匹配mock数据或者不是restful api发起真实请求
        return next();
    }

    // 重定向
    req.url = '/index.html';
    next();
}

const cached = {};

function acceptsHtml(header) {
    let htmlAcceptHeaders = 'text/html';
    if (header.indexOf(htmlAcceptHeaders) !== -1) {
        return true;
    }
    return false;
}

function searchMockData(path, method) {

    return new Promise((resolve, rejcet) => {
        if (cached[path]) {
            resolve(cached[path]);
        } else {
            fs.readFile(PATH.join(__dirname, `/api${path}/${method}.json`), 'utf-8', function (err, file) {

                // 未找到文件则请求真实请求
                if (err) {
                    return rejcet(err);
                }

                cached[path] = file;

                resolve(file);
            });
        }
    });
}

const RESTFUL_RE = /^(\/\w*)*$/

function isRestful(url) {
    return RESTFUL_RE.test(url);
}

module.exports = mockMiddleware
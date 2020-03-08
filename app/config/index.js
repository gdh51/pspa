const config = {};


config.cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS, PATCH',
};

config.db = {

};

config.cache = { //配置服务器支持的缓存情况
    maxAge: '7dz', //服务器认为自己文件有效的秒数，也就是说10分钟内这个文件就用本地缓存的
    lastModified: true, //是否支持last modified
    etag: true //是否支持etag
};

module.exports = config;

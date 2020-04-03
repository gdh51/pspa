const path = require('path');
const mockMiddleware = require('./mock/index');

module.exports = {
    publicPath: '/',
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].template = path.join(__dirname, './index.html');

            return args;
        })
    },

    devServer: {
        before (app) {
            app.use(mockMiddleware());
        },

        // proxy: 'http://localhost:3000'
    },

    // eslint验错
    lintOnSave: true
}
module.exports = {
  publicPath: './',
  chainWebpack: config =>{
    config.plugin('html').tap(args => {
      args[0].template = 'D:/pspa/index.html';

      return args;
    })
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/personalBlog/'
    : '/'
}
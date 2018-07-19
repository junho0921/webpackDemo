var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');
// 启动服务
var app = express();
var compiler = webpack(config);
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware');
/*
* webpackDevMiddleware
* 1，客户端启动sse服务监听服务器更新文件通知
* 2，编译文件（develop模式是存放文件在内存）
* 3，启动服务：监听文件变更 -> 触发文件编译；
* */
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath //绑定middleware
}));
/*
* 热更新
* 1，服务器启动SSE发送文件更新消息给客户端（若没用这个中间件，那么SSE是连接不上的）
* */
app.use(webpackHotMiddleware(compiler));
// 静态资源服务
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../index.html')); //
});
// 监听服务
app.listen(3100, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3100');
});


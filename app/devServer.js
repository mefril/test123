var path = require('path');
var express = require('express');
var httpProxy = require("http-proxy");
var webpack = require('webpack');
var config = require('./config/dev');
let service = require('./service');
let fs = require('fs');

var app = express();
var apiProxy = httpProxy.createProxyServer();
var compiler = webpack(config);

app.use('/native/{id}', function (req, res) {
    console.log(req.params.id)
    service.getData(req.params).then((result)=> {
        res.send(result);

    });
})


app.get('/login', function (req, res) {
    //ignore in dev env, log in through server
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(config.port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
});

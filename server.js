var express = require('express')
var app = express()
var httpServer = require('http').Server(app)

require('./setup')(app, express)

httpServer.listen(app.get('port'), function () {
  console.log('\n Tic-Tac-Choo Server up, port : ' + app.get('port') + ' environment ' + app.get('env'))
})

module.exports = app
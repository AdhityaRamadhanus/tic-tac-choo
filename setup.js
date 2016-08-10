'use strict'
var path = require('path')
module.exports = function (app, express) {
  // app var
  app.set('port', process.env.PORT || 3000)
  app.set('env', process.env.NODE_ENV || 'development')

  app.use('/dist',express.static(path.join(__dirname, 'dist')))
  
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'))
  })
}

const choo = require('choo')
const app = choo()

const mainModel = require('./model')
const mainView = require('./view')
app.model(mainModel())
app.router((route) => [
	route('/', mainView)
])

const tree = app.start()
document.body.appendChild(tree)

var app = require('express')()
var db = {}



/**
	* routes
	*/

app.post('/notas', function(req, res){
	console.log('POST',req.body.nota)
	var notaNueva = req.body.nota
	notaNueva.id = 123

	db[notaNueva.id] = notaNueva

	res
		.status(201)
		// .send({}) //express al detectar un objeto vacío lo convierte en json
		.json({
			nota: notaNueva
		})
})

app.get('/notas/:id?', function(req, res){
	console.log('GET /notas/%s', req.params.id)
	var id = req.params.id
	var nota = db[id]

	res.json({
		notas: nota
	})

})

module.exports = app
var app = require('express')()
var db = {}



/**
	* routes
	*/
app.route('/notas/:id?')
// en todas las rutas queremos correr 
// el sig middelwere
	// logging
	.all(function(req, res, next){
		console.log(req.method, req.path, req.body)
		res.set('Content-Type', 'application/json')
		next()
	})

	// POST
	.post(function(req, res){
		var notaNueva = req.body.nota
		notaNueva.id = Date.now()

		db[notaNueva.id] = notaNueva

		res
			.status(201)
			// .send({}) //express al detectar un objeto vacío lo convierte en json
			.json({
				nota: notaNueva
			})
	})

	// GET
	.get(function(req, res){
		var id = req.params.id
		var nota = db[id]

		res.json({
			notas: nota
		})
	})

module.exports = app
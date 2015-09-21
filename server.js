var express = require('express')

var server = express()

server.post('/notas', function(req, res){
	res
		.status(201)
		// .send({}) //express al detectar un objeto vacío lo convierte en json
		.json({})
})


// var app = express()
if (!module.parent){
server.listen(3000, function(){
	console.log('hola, estoy escuchando desde http://localhost:3000')
 })
  }else{
	module.exports = server
 }

var request = require('supertest')
var api = require('../server.js')
// correr las pruebas con diferentes hosts:
var host = process.env.API_TEST_HOST || api

request = request(host)


describe('recurso /notas', function() {

  describe('POST', function() {
  	it('deberia crear una nota', function(done) {
      var data = {
        "nota": {
          "title": "Mejorando.la #node-pro",
          "description": "Introduccion a clase",
          "type": "js",
          "body": "soy el cuerpo de json"
        }
       }

       // libreria supertest:
       // hago un request al servidor:
       // crear solicitud de http enviando data

     request
       .post('/notas')
// Accept application/json
       .set('Accept', 'application/json')
       // .send(data)
// Status Code = 201
       .expect(201)
       .expect('Content-Type', /application\/json/)
       .end(function(err, res) {

         var body = res.body

         // Nota existe
         expect(body).to.have.property('nota')
         var nota = body.nota

         // Propiedades
         expect(nota).to.have.property('title', 'Mejorando.la #node-pro')
         expect(nota).to.have.property('description', 'Introduccion a clase')
         expect(nota).to.have.property('type', 'js')
         expect(nota).to.have.property('body', 'soy el cuerpo de json')
         expect(nota).to.have.property('id')
         done()
		})
  	})

   })
  })
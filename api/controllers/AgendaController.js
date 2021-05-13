/**
 * AgendaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

    get: function(req, res) {
        Contacto.find()
            .then(function(contactos) {
                if (!contactos || contactos.length === 0) {
                    return res.send({
                        'success': false,
                        'message': "Sin registros"
                    })
                }
                debugger
                return res.send({
                    'success': true,
                    'message': "solicitud exitosa",
                    'data': contactos
                })
            })
            .catch(function(err) {
                return res.send({
                    'success': false,
                    'message': "Ha ocurrido un error en la solicitud"
                })
            })
    },

    create: function(req, res) {
        //sails.log.debug(req.allParams())
        Contacto.create(req.allParams())
            .then(function(contacto) {
                return res.send({
                    'success': true,
                    'message': "Se agrego el contacto de manera exitosa"
                })
            })
            .catch(function(err) {
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': "Ha ocurrido un error en la solicitud"
                })
            })
    },

    update: function(req, res) {
        Contacto.update(req.param('id'), req.allParams())
            .then(function(contacto) {
                return res.send({
                    'success': true,
                    'message': "Se actualizo el contacto de manera exitosa"
                })
            })
            .catch(function(err) {
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': "Ha ocurrido un error en la solicitud"
                })
            })
    },

    delete: function(req, res) {
        Contacto.destroy(req.param('id'))
            .then(function(contacto) {
                return res.send({
                    'success': true,
                    'message': "Se ha borrado correctamente"
                })
            })
            .catch(function(err) {
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': "Ha ocurrido un error en la solicitud"
                })
            })
    }




};
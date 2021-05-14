/**
 * BackUsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  get: function (req, res) {
    Usuario.find()
      .then(function (usuarios) {
        if (!usuarios || usuarios.length === 0) {
          return res.send({
            success: false,
            message: "Sin registros",
          });
        }
        debugger;
        return res.send({
          success: true,
          message: "solicitud exitosa",
          data: Usuarios,
        });
      })
      .catch(function (err) {
        return res.send({
          success: false,
          message: "Ha ocurrido un error en la solicitud",
        });
      });
  },

  create: function (req, res) {
    //sails.log.debug(req.allParams())
    Usuario.create(req.allParams())
      .then(function (usuario) {
        return res.send({
          success: true,
          message: "Se agrego el Usuario de manera exitosa",
        });
      })
      .catch(function (err) {
        sails.log.debug(err);
        return res.send({
          success: false,
          message: "Ha ocurrido un error en la solicitud",
        });
      });
  },

  update: function (req, res) {
    Usuario.update(req.param("id"), req.allParams())
      .then(function (usuario) {
        return res.send({
          success: true,
          message: "Se actualizo el Usuario de manera exitosa",
        });
      })
      .catch(function (err) {
        sails.log.debug(err);
        return res.send({
          success: false,
          message: "Ha ocurrido un error en la solicitud",
        });
      });
  },

  delete: function (req, res) {
    Usuario.destroy(req.param("id"))
      .then(function (usuario) {
        return res.send({
          success: true,
          message: "Se ha borrado correctamente",
        });
      })
      .catch(function (err) {
        sails.log.debug(err);
        return res.send({
          success: false,
          message: "Ha ocurrido un error en la solicitud",
        });
      });
  },
};

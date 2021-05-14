/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
      usuario: { type: 'string', required: true, },
      password: { type: 'string', required: true, },
      nombre: { type: 'string', required: true, },
      apellido: { type: 'string', required: true, },
      correo: { type: 'string', required: true, },
      telefono: { type: 'number', required: true, }
    },

};


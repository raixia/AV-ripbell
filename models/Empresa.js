const { Schema, model } = require("mongoose");
const moment =require('moment')
moment.locale('es');
const EmpresaSchema = Schema({
    razonSocial: {
        type: String,
        required: [true, 'La razon social es obligatoria'],
    },
    ruc: {
        type: String,
        required: [true, 'El ruc es olbigatorio']
    },
    logo: {
        type: String,
        default: 'https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg'
    },
    direccion: {
        type: String,
        default: 'Sin direccion'
    },
    estado: {
        type: Boolean,
        default: false
    },
    codigo: {
        type: String,
        require: true
    }
},{timestamps:true})

EmpresaSchema.methods.toJSON = function () {
    const { __v, _id, createdAt,updatedAt,...empresa } = this.toObject();
    empresa.iud = _id
    empresa.fechaCreacion=moment(createdAt).format('LLL')
    empresa.fechaModificacion=moment(updatedAt).format('LLL')
    return empresa
}

module.exports = model('Empresa', EmpresaSchema)

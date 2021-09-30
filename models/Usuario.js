const { Schema, model,} = require('mongoose')
const moment = require('moment')
moment.locale('es')
const UsuarioSchema = Schema({
    nombre: {
        type: String,
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    },
    estado: {
        type: Boolean,
        default: false
    },
    rol: {
        type: String,
        default: 'USER_ROL'
    },
    img: {
        type: String,
        default: 'https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg'
    }

}, { timestamps: true })

UsuarioSchema.methods.toJSON = function () {
    const { __v, _id, createdAt, updatedAt, ...usuario } = this.toObject();
    usuario.iud = _id
    usuario.fechaCreacion = moment(createdAt).format('LLL')
    usuario.fechaModificacion = moment(updatedAt).format('LLL')
    return usuario
}

module.exports = model('Usuario', UsuarioSchema)
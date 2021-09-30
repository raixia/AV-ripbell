const { Schema, model } = require('mongoose');
const PuntoVentaSchema = Schema({
    empresa: {
        type: Schema.Types.ObjectId,
        ref: 'Empresa',
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    direccion: {
        type: String,
        default: 'Direccion default'
    },
    img: {
        type: String,
        default: 'https://i.ytimg.com/vi/Nzv4kw1pKOI/maxresdefault.jpg'
    },
    estado: {
        type: String,
        default: true
    }
}, { timestamps: true })
module.exports = model('PuntoVenta', PuntoVentaSchema);
const { response, request } = require("express");
const { crear, actualizar, AEstado, BusquedaID } = require("../helpers/crud");
const Modelo = require("../models/puntoVenta");
const moment = require('moment')
moment.locale('es');
const CrearPuntoVenta = (req = request, res = response) => {
    const { estado,...newBody } = req.body;
    crear(newBody, Modelo, res)
}
const updatePuntoVenta = (req = request, res = response) => {
    const id = req.params.id
    const { estado, ...newBody } = req.body
    actualizar(id, newBody, Modelo, res)
}
const EstadoPuntoVenta = (req = request, res = response) => {
    const id = req.params.id
    const { estado } = req.body
    AEstado(id, estado, Modelo, res)
}
const EliminarPuntoVenta = (req = request, res = response) => {
    const id = req.params.id
    eliminar(id, Modelo, res)
}
const IDempPuntoVenta = (req = request, res = response) => {
    const id = req.params.id
    BusquedaID(id, Modelo, res)
}
const MostrarPuntoVenta = async (req = request, res = response) => {
    const { limite = 5, desde = 0 } = req.query
    const [total, Modelos] = await Promise.all([
        Modelo.countDocuments(),
        Modelo.find()
            .skip(Number(desde))
            .limit(Number(limite)),
    ])
    res.json({
        ok: true,
        msg: 'Lista de empresas',
        Usuarios: Modelos,
        total
    })
}
module.exports = {
    CrearPuntoVenta,
    updatePuntoVenta,
    EstadoPuntoVenta,
    EliminarPuntoVenta,
    IDempPuntoVenta,
    MostrarPuntoVenta
}
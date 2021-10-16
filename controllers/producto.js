const { response, request } = require("express");
const { crear, actualizar, AEstado, BusquedaID } = require("../helpers/crud");
const Modelo = require("../models/producto");
const moment = require('moment')
moment.locale('es');
const CrearCategoria = (req = request, res = response) => {
    const { estado, ...newBody } = req.body;
    crear(newBody, Modelo, res)
}
const updateCategoria = (req = request, res = response) => {
    const id = req.params.id
    const { estado, ...newBody } = req.body
    actualizar(id, newBody, Modelo, res)
}
const EstadoCategoria = (req = request, res = response) => {
    const id = req.params.id
    const { estado } = req.body
    AEstado(id, estado, Modelo, res)
}
const EliminarCategoria = (req = request, res = response) => {
    const id = req.params.id
    eliminar(id, Modelo, res)
}
const IDempCategoria = (req = request, res = response) => {
    const id = req.params.id
    BusquedaID(id, Modelo, res)
}
const MostrarCategorias = async (req = request, res = response) => {
    const { limite = 5, desde = 0 } = req.query
    const [total, Modelo] = await Promise.all([
        Modelo.countDocuments(),
        Modelo.find()
            .skip(Number(desde))
            .limit(Number(limite)),
    ])
    res.json({
        ok: true,
        msg: 'Lista de Categorias',
        Results: Modelo,
        total
    })
}
module.exports = {
    CrearCategoria,
    updateCategoria,
    EstadoCategoria,
    EliminarCategoria,
    IDempCategoria,
    MostrarCategorias
}
const { response, request } = require("express");
const { crear, actualizar, AEstado, BusquedaID } = require("../helpers/crud");
const { crudActualizar } = require("../helpers/funciones");
const bcryptjs = require('bcryptjs');
const Modelo = require("../models/Usuario");
const moment = require('moment')
moment.locale('es');
const CrearUsuario = (req = request, res = response) => {
    const { estado, rol, password, ...newBody } = req.body;
    const salt = bcryptjs.genSaltSync();
    pwsecrp = bcryptjs.hashSync(password, salt);
    newBody.password = pwsecrp
    crear(newBody, Modelo, res)
}
const updateUsuario = (req = request, res = response) => {
    const idEmpresa = req.params.id
    const { estado, password, rol, ...newBody } = req.body
    const salt = bcryptjs.genSaltSync();
    pwsecrp = bcryptjs.hashSync(password, salt);
    newBody.password = pwsecrp
    actualizar(idEmpresa, newBody, Modelo, res)
}
const EstadoUsuario = (req = request, res = response) => {
    const idModelo = req.params.id
    const { estado } = req.body
    AEstado(idModelo, estado, Modelo, res)
}
const EliminarUsuario = (req = request, res = response) => {
    const idModelo = req.params.id
    eliminar(idModelo, Modelo, res)
}
const IDempUsuario = (req = request, res = response) => {
    const idModelo = req.params.id
    BusquedaID(idModelo, Modelo, res)
}
const MostrarUsuarios = async (req = request, res = response) => {
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
module.exports={
    CrearUsuario,
    updateUsuario,
    EstadoUsuario,
    EliminarUsuario,
    IDempUsuario,
    MostrarUsuarios
}
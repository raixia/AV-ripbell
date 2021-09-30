const { response, request } = require("express");
const { crear, actualizar, AEstado, BusquedaID } = require("../helpers/crud");
const { crudActualizar } = require("../helpers/funciones");
const Empresa = require("../models/Empresa");
const moment =require('moment')
moment.locale('es');
const CrearEmpresa = (req = request, res = response) => {
    const { estado, ...newBody } = req.body;
    crear(newBody, Empresa, res)
}
const updateEmpresa = (req = request, res = response) => {
    const idEmpresa = req.params.id
    const { codigo, ...newBody } = req.body
    actualizar(idEmpresa, newBody, Empresa, res)
}
const EstadoEmpresa = (req = request, res = response) => {
    const idEmpresa = req.params.id
    const { estado } = req.body
    AEstado(idEmpresa, estado, Empresa, res)
}
const EliminarEmpresa = (req = request, res = response) => {
    const idEmpresa = req.params.id
    eliminar(idEmpresa, Empresa, res)
}
const IDempEmpresa = (req = request, res = response) => {
    const idEmpresa = req.params.id
    BusquedaID(idEmpresa, Empresa, res)
}
const MostrarEmpresas = async (req = request, res = response) => {
    const { limite = 5, desde = 0 } = req.query
    const [total, empresas] = await Promise.all([
        Empresa.countDocuments(),
        Empresa.find()
            .skip(Number(desde))
            .limit(Number(limite)),
    ])
    
    res.json({
        ok: true,
        msg: 'Lista de empresas',
        empresas,
        total
    })
}
module.exports = {
    CrearEmpresa,
    updateEmpresa,
    EstadoEmpresa,
    EliminarEmpresa,
    IDempEmpresa,
    MostrarEmpresas
}
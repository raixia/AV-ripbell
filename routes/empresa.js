const { Router } = require("express");
const { check } = require("express-validator");
const { CrearEmpresa, updateEmpresa, EstadoEmpresa, EliminarEmpresa, IDempEmpresa, MostrarEmpresas } = require("../controllers/empresa");
const { existeModelo, noexisteModelo } = require("../helpers/validarModelo");
const { validarCampos } = require("../middlewares/validarCampos");
const Empresa = require("../models/Empresa");
const router = Router()


router.post('/', [
    check('ruc', 'Solo se permiten numeros').notEmpty().isNumeric(),
    check('ruc').custom((ruc) => (existeModelo(ruc, 'ruc', Empresa))),
    check('codigo', 'el codigo es necesario').notEmpty(),
    check('codigo').custom((codigo) => (existeModelo(codigo, 'codigo', Empresa))),
    validarCampos
],
    CrearEmpresa)

router.put('/:id', [
    //check('id').custom((id)=>noexisteModelo(id,'_id',Empresa)),
    check('ruc').custom((ruc) => (existeModelo(ruc, 'ruc', Empresa))),
], updateEmpresa)

router.put('/estado/:id', [
    check('estado', 'el estado solo recibe true/false').isBoolean()
],
    EstadoEmpresa)

router.delete('/:id', [

], EliminarEmpresa)

router.get('/:id', [

], IDempEmpresa)
router.get('/', [],
    MostrarEmpresas)
module.exports = router
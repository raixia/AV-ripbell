const { Router } = require("express");
const { check } = require("express-validator");
const { MostrarUsuarios, IDempUsuario, CrearUsuario, updateUsuario, EliminarUsuario, EstadoUsuario } = require("../controllers/usuario");
const { existeModelo } = require("../helpers/validarModelo");
const { validarJWT } = require("../middlewares/validar-jwt");
const { validarCampos } = require("../middlewares/validarCampos");
const Usuario = require("../models/Usuario");
const router = Router();
router.get('/', [
    validarJWT,

],
    MostrarUsuarios)

router.get('/:id', [
    validarJWT,
    check('id','No es un id valido').isMongoId(),
    check('id','no se encontro un id valido').notEmpty()
],
    IDempUsuario)

router.post('/', [
    validarJWT,
    check('correo', 'El correo debe ser obligatorio').notEmpty(),
    check('password', 'el password es obligatorio').notEmpty(),
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    check('correo').custom((correo) => (existeModelo(correo, 'correo', Usuario))),
    validarCampos
],
    CrearUsuario)

router.put('/:id', [
    validarJWT,
    check('correo').custom((correo) => (existeModelo(correo, 'correo', Usuario))),
    validarCampos
],
    updateUsuario)

router.delete('/', [
    validarJWT
],
    EliminarUsuario)

router.put('/estado/:id', [
    validarJWT

],
    EstadoUsuario)

module.exports = router
const { Router } = require("express");
const { MostrarCategorias, IDempCategoria, CrearCategoria, updateCategoria, EliminarCategoria, EstadoCategoria } = require("../controllers/categoria");
const { validarJWT } = require("../middlewares/validar-jwt");
const router = Router();
router.get('/', [
    validarJWT
],
    MostrarCategorias)
router.get('/:id', [
    validarJWT
],
    IDempCategoria)

router.post('/', [
    validarJWT
],
    CrearCategoria)

router.put('/:id', [
    validarJWT
],
    updateCategoria)

router.delete('/', [
    validarJWT
],
    EliminarCategoria)

router.put('/estado/:id', [
    validarJWT
],
    EstadoCategoria)

module.exports = router
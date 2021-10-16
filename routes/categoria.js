const { Router } = require("express");
const { MostrarCategorias, IDempCategoria, CrearCategoria, updateCategoria, EliminarCategoria, EstadoCategoria } = require("../controllers/categoria");
const router = Router();
router.get('/', [

],
    MostrarCategorias)
router.get('/:id', [

],
    IDempCategoria)

router.post('/', [

],
    CrearCategoria)

router.put('/:id', [

],
    updateCategoria)

router.delete('/', [

],
    EliminarCategoria)

router.put('/estado/:id', [

],
    EstadoCategoria)

module.exports = router
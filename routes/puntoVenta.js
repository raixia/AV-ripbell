const { Router } = require("express");
const { MostrarPuntoVenta, IDempPuntoVenta, CrearPuntoVenta, updatePuntoVenta, EliminarPuntoVenta, EstadoPuntoVenta } = require("../controllers/PuntoVenta");
const router = Router();
router.get('/', [

],
    MostrarPuntoVenta)
router.get('/:id', [

],
    IDempPuntoVenta)

router.post('/', [

],
    CrearPuntoVenta)

router.put('/:id', [

],
    updatePuntoVenta)

router.delete('/', [

],
    EliminarPuntoVenta)

router.put('/estado/:id', [

],
    EstadoPuntoVenta)

module.exports = router
const { Router } = require("express");
const { check } = require("express-validator");
const { MostrarPuntoVenta, IDempPuntoVenta, CrearPuntoVenta, updatePuntoVenta, EliminarPuntoVenta, EstadoPuntoVenta } = require("../controllers/PuntoVenta");
const { validarJWT } = require("../middlewares/validar-jwt");
const router = Router();
router.get('/', [
    validarJWT
],
    MostrarPuntoVenta)
router.get('/:id', [
    validarJWT,
    check('id','No es un id valido').isMongoId(),
    check('id','no se encontro un id valido').notEmpty()
    
],
    IDempPuntoVenta)

router.post('/', [
    validarJWT,
    check('direccion','La direccion es obligatoria').notEmpty()
],
    CrearPuntoVenta)

router.put('/:id', [
    validarJWT
],
    updatePuntoVenta)

router.delete('/', [
    validarJWT
],
    EliminarPuntoVenta)

router.put('/estado/:id', [
    validarJWT
],
    EstadoPuntoVenta)

module.exports = router
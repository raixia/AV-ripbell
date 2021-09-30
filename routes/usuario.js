const { Router } = require("express");
const { MostrarUsuarios, IDempUsuario, CrearUsuario, updateUsuario, EliminarUsuario, EstadoUsuario } = require("../controllers/usuario");
const router = Router();
router.get('/', [

],
    MostrarUsuarios)

router.get('/:id', [

],

    IDempUsuario)

router.post('/', [

],
    CrearUsuario)

router.put('/:id', [

],
    updateUsuario)

router.delete('/', [

],
    EliminarUsuario)

router.put('/estado/:id', [
    
],
    EstadoUsuario)

module.exports = router
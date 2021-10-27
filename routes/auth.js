const { Router } = require("express");
const { check } = require("express-validator");
const { login, renovarToken } = require("../controllers/auth");
const router = Router();
router.post('/', [
    check('correo', 'El correo es obligatorio').notEmpty(),
    check('correo', 'correo no valido').isEmail(),
    check('password', 'El password es obligatorio').notEmpty(),
],
    login)
router.post('/renovarToken', [],
    renovarToken
)
module.exports = router
const { response, request } = require("express")
const { generarJWT } = require("../helpers/generar-jwt")
const Usuario = require("../models/Usuario")
const bcryptjs = require('bcryptjs');
const login = async (req = request, res = response) => {
    const { correo, password } = req.body
    const usuarioDB = await Usuario.findOne({ correo })
    if (!usuarioDB) {
        return res.status(404).json({
            ok: false,
            msg: `Usuario con el correo : ${correo} no encontrado`
        })
    }
    const validPassword = bcryptjs.compareSync(password, usuarioDB.password);
    if (!validPassword) {
        return res.status(404).json({
            ok: false,
            msg: `Contraseña no valida`
        })
    }
    const token = await generarJWT(usuarioDB.id)
    res.json({
        ok: true,
        msg: 'te logeaste correctamente',
        usuarioDB,
        token
    })
}
module.exports = {
    login
}
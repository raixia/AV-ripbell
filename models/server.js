const express = require('express')
const cors = require('cors')
const { conexion } = require('../database/config')
class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.paths = {
            usuarios: '/api/usuarios',
            empresa: '/api/empresas',
            puntoVenta:'/api/puntoVenta',
            auth:'/api/auth'
        }  
        this.conectando();
        this.middlewares();

        this.routes()
    }
    async conectando() {
        await conexion()
    }
    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())

    }
    routes() {
        this.app.use(this.paths.usuarios, require('../routes/usuario'))
        this.app.use(this.paths.empresa, require('../routes/empresa'))
        this.app.use(this.paths.puntoVenta, require('../routes/puntoVenta'))
        this.app.use(this.paths.auth,require('../routes/auth'))
    }
    listen() {
        this.app.listen(this.port, () => console.log(`servidor corriendo en el puerto  ${this.port}`))
    }
}
module.exports = {
    Server
}
const crear = async (newBody, Modelo, res) => {
    const ModeloDB = new Modelo(newBody)
    await ModeloDB.save()
    return res.json({
        ok: false,
        msg: 'Empresa Creada',
        Resultados: ModeloDB
    })
}
const actualizar = async (id, newBody, Modelo, res) => {
    const ModeloDB = await Modelo.findByIdAndUpdate(id, newBody, { new: true })
    if (!ModeloDB) {
        return res.status(404).json({
            ok: false,
            msg: 'No se encontro la peticion'
        })
    }
    return res.json({
        ok: true,
        msg: 'Empresa actualizada',
        Resultados: ModeloDB
    })
}
const AEstado = async (id, estado, Modelo, res) => {
    if (estado == "true") {
        const ModeloDB = await Modelo.findByIdAndUpdate(id, { estado: true }, { new: true })
        res.json({
            ok: false,
            msg: `Empresa en estado : ${estado}`,
            Resultados: ModeloDB
        })
    } else if (estado == "false") {
        const ModeloDB = await Modelo.findByIdAndUpdate(id, { estado: false }, { new: true })
        res.json({
            ok: false,
            msg: `Empresa en estado : ${estado}`,
            Resultados: ModeloDB
        })
    } else {
        res.status(403).json({
            ok: false,
            msg: 'valor no permitido'
        })
    }
}
const eliminar = async (id, Modelo, res) => {
    const ModeloDB = await Modelo.findByIdAndDelete(id)
    if (!ModeloDB) {
        return res.status(404).json({
            ok: false,
            msg: 'No se encontro la peticion de eliminacion'
        })
    }
    res.json({
        ok: false,
        msg: 'Se elimino la empresa'
    })
}
const BusquedaID = async (id, Modelo, res) => {
    const ModeloDB = await Modelo.findById(id)
    if (!ModeloDB) {
        return res.status(404).json({
            ok: false,
            msg: 'No se encontro la peticion '
        })
    }
    res.json({
        ok: false,
        msg: 'Empresa encontrada',
        Resultado: ModeloDB
    })
}
const listar = () => {

}
module.exports = {
    crear,
    actualizar,
    AEstado,
    eliminar,
    BusquedaID,
    listar
}
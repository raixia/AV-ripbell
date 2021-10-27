const mongoose = require('mongoose');
const conexion = async () => {
    const StrCn = process.env.MONGODB_CNN
    try {
        await mongoose.connect(StrCn);
        console.log('Se conecto a la base de datos')
    } catch (error) {
        console.log('Error al conectar a base de datos')
        throw new Error('Error al conecta a base de datos')
    }


}
module.exports = {
    conexion
}
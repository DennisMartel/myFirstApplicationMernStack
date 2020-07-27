//llamando a las variables de entorno
require('dotenv').config()

//llamamos a app y a la base de datos
const app = require('./app');
require('./database');

//creando la funcion principal de nuestro servidor a la escucha del puerto
async function main() {
    await app.listen(app.get('port'));
    console.log(`server running on port: ${app.get('port')}`);
}

main();
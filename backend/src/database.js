//llamando a mongoose
const mongoose = require('mongoose');

//creamos la constante de nuesta DB
const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/mernstack';

//haciendo la conexion a mongodb
mongoose.connect(URI,  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
});

//conectamos
const connection = mongoose.connection;

//verifica si se ha hecho bien la conexion a la DB
connection.once('open', () => {
    console.log('db is connected');
});
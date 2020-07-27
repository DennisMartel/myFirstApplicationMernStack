//llamando a express
const express = require('express');

//llamando a cors
const cors = require('cors');

//guardamos el metodo express en la variable app
const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

//exportando app
module.exports = app;
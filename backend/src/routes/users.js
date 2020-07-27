//llamando a express
const express = require('express');

//enrutador
const { Router } = require('express');
const router = Router();

//llamando al controlador de notas y almacenamos en constante
const { getUsers, createUser, deleteUser } = require('../controllers/users.controller');

//ruta para obtener todos los registros y almacenar
router.route('/')
    .get(getUsers)
    .post(createUser)

//rutas para obtener un id en especifico para mostrar, actualizar o eliminar
router.route('/:id')
    .delete(deleteUser)

//exportando nuestro enrutador
module.exports = router;
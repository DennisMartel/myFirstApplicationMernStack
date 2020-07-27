//llamando a express
const express = require('express');

//enrutador
const { Router } = require('express');
const router = Router();

//llamando al controlador de notas y almacenamos en constante
const { getNotes, createNote, getNote, updateNote, deleteNote } = require('../controllers/notes.controller');

//ruta para obtener todos los registros y almacenar
router.route('/')
    .get(getNotes)
    .post(createNote)

//rutas para obtener un id en especifico para mostrar, actualizar o eliminar
router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)

//exportando nuestro enrutador
module.exports = router;
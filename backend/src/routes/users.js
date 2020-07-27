//llamando a express
const express = require('express');

//enrutador
const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req, res) => res.send('Users Routes'));

//exportando nuestro enrutador
module.exports = router;
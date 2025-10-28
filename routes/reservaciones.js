const express = require('express');
const router = express.Router();
const { crearReservacion } = require('../controllers/reservacionesController');

router.post('/', crearReservacion);

module.exports = router;
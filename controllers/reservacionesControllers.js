const Reservacion = require('../models/Reservacion');

const crearReservacion = async (req, res) => {
  try {
    const nueva = new Reservacion(req.body);
    await nueva.save();
    res.status(201).json({ mensaje: 'Reservación guardada', data: nueva });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar la reservación' });
  }
};

module.exports = { crearReservacion };
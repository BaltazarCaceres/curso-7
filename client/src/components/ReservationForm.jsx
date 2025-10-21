import React, { useState } from 'react';
import './ReservationForm.css'; // si tienes estilos

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/api/reservaciones', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(`Reserva confirmada para ${data.data.name}`);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: 1,
        });
      })
      .catch((err) => {
        console.error(err);
        setError('No se pudo conectar con el servidor.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reservación</h2>
      <input name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
      <input name="email" placeholder="Correo" value={formData.email} onChange={handleChange} required />
      <input name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} required />
      <input name="date" type="date" value={formData.date} onChange={handleChange} required />
      <input name="time" type="time" value={formData.time} onChange={handleChange} required />
      <input name="guests" type="number" min="1" value={formData.guests} onChange={handleChange} required />
      <button type="submit">Reservar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default ReservationForm;
  
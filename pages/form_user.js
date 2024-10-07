import { useState } from 'react';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: 'M',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aquí enviarías los datos a tu API para crear el usuario
    console.log('Datos del formulario:', formData);

    // Ejemplo de envío a una API (reemplaza con tu endpoint real)
    const response = await fetch('/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Usuario creado exitosamente');
      // Redirige o muestra un mensaje de éxito
      Router.push('/');
    } else {
      console.error('Error al crear el usuario');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="age">Edad:</label>
      <input
        type="number"
        id="age"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />
      <label htmlFor="sex">Sexo:</label>
      <select id="sex" name="sex" value={formData.sex} onChange={handleChange}>
        <option value="M" default>Masculino</option>
        <option value="F">Femenino</option>
      </select>
        <button type="submit">Crear Usuario</button>
    </form>
  );
}

export default UserForm;
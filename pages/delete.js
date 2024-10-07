import { useState } from 'react';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';

function Delete({id}) {

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aquí enviarías los datos a tu API para crear el usuario
    console.log('Datos:', {id});

    // Ejemplo de envío a una API (reemplaza con tu endpoint real)
    const response = await fetch("/api/delete", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user_id: id}),
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
    </form>
  );
}

export default Delete;
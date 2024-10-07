import React from 'react';
import Link from 'next/link';

const Buttons = ({ classN, id }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch('/api/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: id }),
      });

      if (response.ok) {
        console.log('Usuario eliminado exitosamente');
        window.location.href = '/';
      } else {
        console.error('Error al eliminar el usuario');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button className={classN} onClick={handleDelete}>Eliminar</button>
  );
};

export default Buttons;
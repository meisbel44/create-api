import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';

function UpdateForm() {
  const router = useRouter();
  const { id, nameU, ageU, sexU } = router.query;
  
  const [formData, setFormData] = useState({
    name: nameU,
    age: ageU,
    sex: sexU,
  });
  console.log("nombre a modificar", {...formData.name});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("nombre: ", {...formData.name});
      const response = await fetch('/api/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...formData }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User updated successfully:', {name});
        window.location.href = '/';
      } else {
        console.log('User not found');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
 
  return (
    <form>
      <h2 className='.Cabecera'>Datos del usuario</h2>
      <hr/>
      <div>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      </div>
      <div>
      <label htmlFor="age">Edad:</label>
      <input
        type="number"
        id="age"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />
      </div>
      <div>
      <label htmlFor="sex">Sexo:</label>
      <select id="sex" name="sex" value={formData.sex} onChange={handleChange}>
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
      </select>
      </div>
      <hr/>
        <button type="submit" onClick={handleSubmit}>Actualizar Usuario</button>
    </form>
  );
}

export default UpdateForm;
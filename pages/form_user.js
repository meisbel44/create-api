import { useState } from 'react';
import Router, { useRouter } from 'next/router';

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

    console.log('Datos del formulario:', formData);

    const response = await fetch('/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Usuario creado exitosamente');
      Router.push('/');
    } else {
      console.error('Error al crear el usuario');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='.Cabecera'>Datos del usuario</h2>
      <hr/>
      <div><div className='Cabecera'>
      <label htmlFor="name">Nombre:</label>
      <input 
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      /></div>
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
        <option value="M" default>Masculino</option>
        <option value="F">Femenino</option>
      </select>
      <hr/>
      </div>
        <button type="submit" className='btn pulse-effect'>Crear Usuario</button>
    </form>
  );
}

export default UserForm;
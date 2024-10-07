import { useState } from 'react';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';

function UpdateForm({id, nombre, edad, sexo}) {
  console.log("nombre a modificar", {nombre});
 
  return (
    <form>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={nombre}
      />
      <label htmlFor="age">Edad:</label>
      <input
        type="number"
        id="age"
        name="age"
        value={edad}
      />
      <label htmlFor="sex">Sexo:</label>
      <select id="sex" name="sex" value={sexo}>
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
      </select>
      <Link href="/form_user" >
        <button type="submit" >Actualizar Usuario</button>
        </Link>
    </form>
  );
}

export default UpdateForm;
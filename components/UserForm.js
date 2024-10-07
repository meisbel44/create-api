// components/UserForm.js
import React, { useState } from 'react';
import Link from 'next/link';

function UserForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={formData.email} />
      </label>
      <label>
        Sex:
        <select name="sex">
            <option value='F'>F</option>
            <option value='M'>F</option>
        </select>
      </label>
      <Link href="/editUser">
        <button>Adicionar Usuario</button>
      </Link>
    </form>
  );
}

export default UserForm;
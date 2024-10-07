import Router, { useRouter } from 'next/router';

function Delete({id}) {

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/delete", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user_id: id}),
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
    </form>
  );
}

export default Delete;
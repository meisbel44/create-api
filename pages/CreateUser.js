import React, { useState } from 'react';
import { useRouter } from 'next/router';

function CreateUser() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age, sex }),
      });

      const data = await response.json();

      if (data.error) {
        console.error('Error creating user:', data.error);
        // Handle error appropriately (e.g., display an error message)
      } else {
        console.log('User created successfully:', data);
        router.push('/'); // Redirect to the home page
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields and submit button */}
    </form>
  );
}

export default CreateUser;
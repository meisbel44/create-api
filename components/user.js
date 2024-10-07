import React, { useState, useEffect } from 'react';

function GUser({id}) {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/userid', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  console.log("user",data.Nombre);

  return user;
}

export default GUser;
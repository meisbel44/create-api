import React, { useState, useEffect } from 'react';

function GUser({ id }) {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/userid', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });

        const data = await response.json();

        if (response.ok) {
          setUser(data);
        } else {
          console.error('Error fetching user:', data.error);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return user;
}

export default GUser;
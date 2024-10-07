import React, { useState, useEffect } from 'react';

function GetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/read');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);


  return users;
}

export default GetUsers;
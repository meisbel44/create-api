//import React from 'react';
import Tupla from './tupla';
//import GetUsers from './GetUser';
import React, { useState, useEffect } from 'react';

function Tabla() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        const response = await fetch('/api/read');
        const data = await response.json();
        setUsers(data);
      };

      fetchUsers();
    }, []);

    if (users.length > 0) {
      return (
        <table className="table table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Sexo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>  
              { users.map((user) => 
                (
                  <Tupla
                    key={user.ID}
                    id={user.ID}
                    name={user.Nombre}
                    age={user.Edad}
                    sex={user.Sexo}
                  />
                )
                )
              }      
          </tbody>
        </table>
      );
    } else {
      return (<p>No users found.</p>);
    }
    
}

export default Tabla;
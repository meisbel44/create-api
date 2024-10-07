import React from 'react';
import Tupla from './tupla';
import GetUsers from './GetUser';

function Tabla() {
    const users = GetUsers();
    return (
        <table className="table-responsive table-striped table-bordered">
          <thead className='thead-fixed '>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Sexo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>       
            {users.map((user) => {
                return (
                    <Tupla
                        key={user.ID}
                        id={user.ID}
                        name={user.Nombre}
                        age={user.Edad}
                        sex={user.Sexo}
                    />
                );
            })}
          </tbody>
        </table>
    );
}

export default Tabla;
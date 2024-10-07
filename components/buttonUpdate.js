import React from 'react';
import GetUserForm from '@/pages/GetUserForm';
import GetUsers from './GetUser';
import Link from 'next/link';

const ButtonsUpdate = ({classN, id, name, age, sex}) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Datos del formulario:', {id});
  };

  return(  
    <Link href={`/update?id=${id}&nameU=${name}&ageU=${age}&sexU=${sex}`}>
    <button className={classN}>
      Editar
    </button>
    </Link>
  );
};

export default ButtonsUpdate;
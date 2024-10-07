import React from 'react';
import GetUserForm from '@/pages/GetUserForm';

const ButtonsUpdate = ({classN, id}) => {
  return(  
    <button className={classN} onClick={GetUserForm({id})}>
      Editar
    </button>
  );
};

export default ButtonsUpdate;
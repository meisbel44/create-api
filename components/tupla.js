import React from 'react';
import Buttons from './buttons';
import ButtonsUpdate from './buttonUpdate';

const Tupla = ({ id, name, age, sex }) =>{
    return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{sex}</td>
      <td>
      <ButtonsUpdate
            class ="button ghost"
            id = {id}
            name = {name}
            age ={age}
            sex = {sex}
        />
        <Buttons
            class ="button ghost"
            id = {id}
        />
      </td>
    </tr>
  );
};

export default Tupla;
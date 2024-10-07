import React, { useState } from 'react';
import { useRouter } from 'next/router';
import UpdateForm from './update';
import GUser from '@/components/user';

export default function GetUserForm({id}) {
  const [ID, setID] = useState({id});
  const router = useRouter();

  let data = [];

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = GUser({id})

        return (
          <UpdateForm
            id = {user.ID}
            name = {user.Nombre} 
            age = {user.Edad}
            sex = {user.Sexo}
          />
        );
    } catch (error) {
      console.error('Error finding user:', error);
    }
  }
}
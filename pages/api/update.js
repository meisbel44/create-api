import { createConnection } from 'mysql2/promise';

async function connectToDatabase() {
  return createConnection({
    host: 'sql5.freemysqlhosting.net',
    user: 'sql5734574',
    password: 'dq2tdplSjH',
    database: 'sql5734574',
    port: 3306,
  });
}

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { id, name, age, sex } = req.body;
  console.log("Cuerpo de la consulta: ",req.body);

  if (!id || !name || !age || !sex) {
    return res.status(400).json({ error: 'id, name, age and sex are required in the request body.' });
  }


  try {

    const connection = await connectToDatabase();

    const [result] = await connection.execute(
      'UPDATE Usuario SET Nombre = ?, Edad = ?, Sexo = ?  WHERE ID = ?',
      [name, age, sex, id]
    );

    await connection.end();

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
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
// Update user API route
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
    // Connect to the database
    const connection = await connectToDatabase();

    // Execute a query to update the user in the "users" table
    const [result] = await connection.execute(
      'UPDATE Usuario SET Nombre = ?, Edad = ?, Sexo = ?  WHERE ID = ?',
      [name, age, sex, id]
    );

    // Close the database connection
    await connection.end();

    // Check if the user was updated successfully
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Respond with a success message
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
import { createConnection } from 'mysql2/promise';

// Function to create a MySQL connection
async function connectToDatabase() {
  return createConnection({
    host: 'localhost',//'sql5.freemysqlhosting.net',
    user: 'sql5734574',
    password: 'dq2tdplSjH',
    database: 'sql5734574',
  });
}

// Delete user API route
export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const user_id = req.body.user_id;
console.log(req.body.user_id)
  if (!user_id) {
    return res.status(400).json({ error: 'id is required in the request body.' });
  }

  try {
    // Connect to the database
    const connection = await connectToDatabase();

    // Execute a query to delete the user from the "users" table
    const [result] = await connection.execute('DELETE FROM Usuario WHERE ID = ?', [user_id]);

    // Close the database connection
    await connection.end();

    // Check if the user was deleted successfully
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Respond with a success message
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}